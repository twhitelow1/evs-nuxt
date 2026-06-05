<template>
  <div class="About">
    <section id="about">
      <div class="container">
        <div class="col-lg-8 col-lg-offset-2">
          <div class="section-heading">
            <EditableContent content-key="about.heading" label="About Heading" :fallback="'<h2>About us</h2>'" />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-lg-5">
            <div id="owl-about" class="owl-carousel">
              <ClientOnly>
                <div class="item">
                  <img class="img-responsive" src="/img/teachingkid.webp" loading="lazy" alt="">
                </div>
              </ClientOnly>
              <ClientOnly>
                <div class="item">
                  <img class="img-responsive" src="/img/babysitterwithkid.webp" loading="lazy" alt="">
                </div>
              </ClientOnly>
            </div>
          </div>
          <div class="col-lg-7 col-sm-12">
            <EditableContent content-key="about.body" label="About Body" :fallback="aboutBodyFallback" />
          </div>
        </div>
        <div class="row features">
          <div class="col-lg-12 col-sm-12">
            <div class="col-md-4 media text-center">
              <i class="flaticon-person-1"></i>
              <div class="media-body">
                <EditableContent content-key="about.feature1" label="Feature: Infant Care" :fallback="'<h5 class=&quot;media-heading&quot;>Infant Care</h5><p>We take pride in our ability to care for infants and toddlers.</p>'" />
              </div>
            </div>
            <div class="col-md-4 media text-center">
              <i class="flaticon-school"></i>
              <div class="media-body">
                <EditableContent content-key="about.feature2" label="Feature: Safety First" :fallback="'<h5 class=&quot;media-heading&quot;>Safety First</h5><p>Safety is one of our top priorities. Our sitters are insured, CPR certified, and background checked.</p>'" />
              </div>
            </div>
            <div class="col-md-4 media text-center">
              <i class="flaticon-music"></i>
              <div class="media-body">
                <EditableContent content-key="about.feature3" label="Feature: Activities" :fallback="'<h5 class=&quot;media-heading&quot;>Activities</h5><p>We love fun and we plan several types of activities for the little ones to enjoy.</p>'" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-sm-12 paper_block">
          <EditableContent content-key="about.testimonials-heading" label="Testimonials Heading" :fallback="'<h3 class=&quot;text-center&quot;>What Parents Think</h3>'" />
          <div id="owl-testimonials" class="owl-carousel">
            <ClientOnly><blockquote><div class="col-md-10 col-md-offset-1 quote-test"><p>Excellent experience. Prompt, attentive, and consistent communication. Made it easier for us as parents to relax and enjoy our stay at The Arrabelle. They showed up right to our room and we felt very comfortable each night. Highly recommend.</p><small><i class="fa fa-user">Steve O</i></small></div></blockquote></ClientOnly>
            <ClientOnly><blockquote><div class="col-md-10 col-md-offset-1 quote-test"><p>My wife and I finally got a chance to ski together on our recent trip to Vail, and that's due to Cat and her team - thanks so much for making that happen, and keeping our daughter engaged with caring, competent sitters.</p><small><i class="fa fa-user">Roddy R.</i></small></div></blockquote></ClientOnly>
            <ClientOnly><blockquote><div class="col-md-10 col-md-offset-1 quote-test"><p>Super pleased with Eagle Valley Sitters! I highly recommend their service. Very responsible and made our life easy in Beaver Creek.</p><small><i class="fa fa-user">Jeremy D</i></small></div></blockquote></ClientOnly>
            <ClientOnly><blockquote><div class="col-md-10 col-md-offset-1 quote-test"><p>We had a really excellent experience with Cat and Abigail of Eagle Valley Sitters on our recent family trip to Vail with a four- and two-year-old. They were professional and flexible with our schedule, and made the days really fun and engaging for our kids. They were really easy to work with and we would highly recommend them to anyone who is looking for help with kids in the Vail area!</p><small><i class="fa fa-user">Julie W</i></small></div></blockquote></ClientOnly>
            <ClientOnly><blockquote><div class="col-md-10 col-md-offset-1 quote-test"><p>Our sitter was extremely caring, helpful, and responsible with our 5 month old daughter. She was also flexible around our schedule and needs which made working with her a pleasure. We plan to book with Eagle Valley Sitters again next winter!</p><small><i class="fa fa-user">Jeremy M</i></small></div></blockquote></ClientOnly>
            <ClientOnly><blockquote><div class="col-md-10 col-md-offset-1 quote-test"><p>We used Eagle Valley Sitters to find a sitter for our 5 month old for an entire day while we were in town for a wedding. Our sitter was on time, kind, and caring. I felt my son was in good hands while we were away for such a long period of time. She was good at communicating with me and ensuring that we knew what was going on throughout the day. I would recommend Eagle Valley Sitters and would definitely book with them again!</p><small><i class="fa fa-user">Erica F</i></small></div></blockquote></ClientOnly>
            <ClientOnly><blockquote><div class="col-md-10 col-md-offset-1 quote-test"><p>Our sitter was always reliable. She engaged my 9 year old and did fun activities with her. We both adored her. I highly recommend Eagle Valley Sitters.</p><small><i class="fa fa-user">Christine G</i></small></div></blockquote></ClientOnly>
            <ClientOnly><blockquote><div class="col-md-10 col-md-offset-1 quote-test"><p>We used Eagle Valley Sitters to find our summer nanny for my two boys (age 7 and 9). Our sitter was active with the boys, taking them swimming and hiking. She was flexible and dependable and exactly the help we needed for the summer!</p><small><i class="fa fa-user">Renee B</i></small></div></blockquote></ClientOnly>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const aboutBodyFallback = `<p>Eagle Valley Sitters is committed to being the #1 babysitting and pet sitting service in Eagle and Summit counties of Colorado. With the most qualified and experienced sitters, we can provide each of our clients with a truly top-tier experience</p><p>Owned by a former professional nanny, using our expertise, we match you with the best sitter to meet your family's unique needs</p><p>We are a small, locally run business, that knows each and every one of our sitters. We're passionate about what we do, and we aim to give our clients peace of mind when leaving their children (or pets!) in our care.</p>`

onMounted(() => {
  ;(window as any).$?.('#owl-testimonials').owlCarousel?.({
    dots: true, loop: true, autoplay: false, nav: true,
    navText: ["<i class='flaticon-arrows-1'></i>", "<i class='flaticon-arrows'></i>"],
    responsive: { 1: { items: 1 }, 991: { items: 2 } },
  })
  ;(window as any).$?.('#owl-about').owlCarousel?.({ items: 1, dots: true, loop: true, autoplay: false })
})
</script>

<style></style>
