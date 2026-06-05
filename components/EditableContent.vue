<template>
  <div class="editable-wrapper" :class="{ 'edit-active': isEditMode }">

    <!-- Edit mode: TipTap editor -->
    <div v-if="isEditMode" class="editable-block">
      <div class="editor-toolbar">
        <span class="toolbar-label">✏️ {{ label }}</span>
        <div class="toolbar-actions">
          <button title="Bold" :class="{ active: editor?.isActive('bold') }" @click="editor?.chain().focus().toggleBold().run()"><b>B</b></button>
          <button title="Italic" :class="{ active: editor?.isActive('italic') }" @click="editor?.chain().focus().toggleItalic().run()"><i>I</i></button>
          <button title="Underline" :class="{ active: editor?.isActive('underline') }" @click="editor?.chain().focus().toggleUnderline().run()"><u>U</u></button>
          <div class="toolbar-sep" />
          <button title="Heading 2" :class="{ active: editor?.isActive('heading', { level: 2 }) }" @click="editor?.chain().focus().toggleHeading({ level: 2 }).run()">H2</button>
          <button title="Heading 3" :class="{ active: editor?.isActive('heading', { level: 3 }) }" @click="editor?.chain().focus().toggleHeading({ level: 3 }).run()">H3</button>
          <div class="toolbar-sep" />
          <button title="Bullet list" :class="{ active: editor?.isActive('bulletList') }" @click="editor?.chain().focus().toggleBulletList().run()">• List</button>
          <button title="Ordered list" :class="{ active: editor?.isActive('orderedList') }" @click="editor?.chain().focus().toggleOrderedList().run()">1. List</button>
          <div class="toolbar-sep" />
          <button title="Align left" @click="editor?.chain().focus().setTextAlign('left').run()">⬅</button>
          <button title="Align center" @click="editor?.chain().focus().setTextAlign('center').run()">⬛</button>
          <button title="Align right" @click="editor?.chain().focus().setTextAlign('right').run()">➡</button>
          <div class="toolbar-sep" />
          <button class="save-btn" :disabled="saving" @click="save">{{ saving ? 'Saving…' : '✓ Save' }}</button>
          <button class="cancel-btn" @click="cancel">✕ Cancel</button>
        </div>
      </div>
      <editor-content class="editor-content" :editor="editor" />
      <p v-if="saved" class="saved-msg">✓ Saved!</p>
    </div>

    <!-- View mode: render HTML -->
    <div v-else v-html="currentHtml" />
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'

const props = defineProps<{
  contentKey: string
  fallback: string
  label?: string
}>()

const { isEditMode } = useEditMode()
const { getContent, saveContent } = useContent()

const currentHtml = ref(props.fallback)
const saving = ref(false)
const saved = ref(false)

onMounted(async () => {
  currentHtml.value = await getContent(props.contentKey, props.fallback)
  editor.value?.commands.setContent(currentHtml.value)
})

// Watch for edit mode turning on — initialize editor with current content
watch(isEditMode, (val) => {
  if (val) {
    editor.value?.commands.setContent(currentHtml.value)
  }
})

const editor = useEditor({
  content: currentHtml.value,
  extensions: [
    StarterKit,
    Underline,
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
  ],
})

const save = async () => {
  if (!editor.value) return
  saving.value = true
  const html = editor.value.getHTML()
  await saveContent(props.contentKey, html)
  currentHtml.value = html
  saving.value = false
  saved.value = true
  setTimeout(() => { saved.value = false }, 2000)
}

const cancel = () => {
  editor.value?.commands.setContent(currentHtml.value)
}

onUnmounted(() => { editor.value?.destroy() })
</script>

<style scoped>
.editable-wrapper.edit-active {
  position: relative;
  outline: 2px dashed #66bfc7;
  outline-offset: 4px;
  border-radius: 4px;
  transition: outline 0.2s;
}

.editable-block {
  background: white;
  border-radius: 6px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.12);
  overflow: hidden;
}

.editor-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  background: #2c2c2c;
  padding: 8px 12px;
}

.toolbar-label {
  color: #aaa;
  font-size: 0.8rem;
  white-space: nowrap;
}

.toolbar-actions {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.toolbar-actions button {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #ddd;
  padding: 3px 8px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.15s;
}

.toolbar-actions button:hover { background: #444; }
.toolbar-actions button.active { background: #555; border-color: #66bfc7; color: #66bfc7; }

.toolbar-sep { width: 1px; height: 18px; background: #444; margin: 0 4px; }

.save-btn {
  background: #66bfc7 !important;
  color: white !important;
  border-color: transparent !important;
  font-weight: 600;
  padding: 4px 14px !important;
}
.save-btn:hover { background: #4aa8b0 !important; }
.save-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.cancel-btn { color: #aaa !important; }
.cancel-btn:hover { background: #333 !important; }

.editor-content {
  padding: 16px;
  min-height: 80px;
  font-size: inherit;
  color: inherit;
}

.saved-msg {
  text-align: right;
  color: #43a047;
  font-size: 0.85rem;
  padding: 4px 12px 8px;
  margin: 0;
}
</style>

<style>
/* TipTap editor content needs unscoped styles */
.editor-content .ProseMirror {
  outline: none;
  min-height: 60px;
}
.editor-content .ProseMirror p { margin: 0.5em 0; }
</style>
