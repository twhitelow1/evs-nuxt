<template>
    <div>

        <Head>
            <Meta charset="utf-8" />
            <!--[if IE]>
      <Meta http-equiv="X-UA-Compatible" content="IE=edge">
      <![endif]-->
            <Meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <Meta name="description"
                content="Eagle Valley Sitters is committed to creating a safe, nurturing, and fun environment for children of all ages. We are dedicated to providing professional, safe, and reliable childcare to Vail and it’s surrounding areas." />
            <Meta name="author" content="" />
            <Meta charset="UTF-8" />
            <!-- <Link rel="preload" as="image" href="/img/kid1.webp" /> -->
            <!-- Page title -->
            <Title>Eagle Valley Sitters</Title>
            <!--[if lt IE 9]>
      <script src="js/respond.js"></script>
      <![endif]-->
            <!-- Bootstrap Core CSS -->
            <Link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
            <!-- Icon fonts -->
            <Link href="/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
            <Link href="/fonts/flaticons/flaticon.css" rel="stylesheet" type="text/css" />
            <Link href="/fonts/glyphicons/bootstrap-glyphicons.css" rel="stylesheet" type="text/css" />
            <!-- Google fonts -->
            <Link href='https://fonts.googleapis.com/css?family=Lato:400,700,800%7CAlegreya+Sans:700,900&display=swap'
                rel='stylesheet' type='text/css' />
            <!-- Theme CSS -->
            <Link href="/css/style.css" rel="stylesheet" />
            <!-- Color Style CSS -->
            <Link href="/styles/funtime.css" rel="stylesheet" />
            <!-- Owl Slider & Prettyphoto -->
            <Link rel="stylesheet" href="/css/owl.carousel.css" />
            <Link rel="stylesheet" href="/css/prettyPhoto.css" />
            <!-- LayerSlider stylesheet -->
            <Link rel="stylesheet" href="/layerslider/css/layerslider.css" />
            <!-- Favicons-->
            <Link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
            <Link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
            <Link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <Link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap" />
            <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css" />
            <Link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap" />
            <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css" />
        </Head>
        
        <Body id="page-top" data-spy="scroll" data-target=".navbar-custom">
            <slot />
        </Body>
</div>
</template>
<script setup lang="ts">
useHead({
  
  
  
  script: [  { src: '/js/jquery.min.js', defer: true ,tagPosition:'bodyClose'},
        { src: '/js/bootstrap.min.js', defer: true ,tagPosition:'bodyClose'},
       
        { src: '/js/jquery.isotope.js', defer: true ,tagPosition:'bodyClose'},
       
        { src: '/js/plugins.js', defer: true ,tagPosition:'bodyClose'},
        { src: '/js/contact.js', defer: true ,tagPosition:'bodyClose'},
        { src: '/js/prefixfree.js', defer: true ,tagPosition:'bodyClose'},
        { src: '/layerslider/js/greensock.js', defer: true ,tagPosition:'bodyClose'},
        { src: '/layerslider/js/layerslider.load.js', defer: true ,tagPosition:'bodyClose'},
        { src: '/layerslider/js/layerslider.transitions.js', defer: true ,tagPosition:'bodyClose'},
        { src: '/layerslider/js/layerslider.kreaturamedia.jquery.js', defer: true ,tagPosition:'bodyClose'},
        { src: '/js/mc-validate.js', defer: true ,tagPosition:'bodyClose' },
        { src: '/js/main.js', defer: true ,tagPosition:'bodyClose'},
    ]
})
</script>