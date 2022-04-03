<script>
    // Components
    // Libraries
    import {locale, t} from '$lib/translations';
    import {marked} from 'marked';
</script>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/wallpaper.webp" class="bd-placeholder-img" width="100%" height="100%" alt="...">

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Cheburashka OS</h1>
            <p>Free operation system for a modern user</p>
            <p><a class="btn btn-lg btn-primary" href="download">Download</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/cinnamon.webp" class="bd-placeholder-img" width="100%" height="100%" alt="...">

        <div class="container">
          <div class="carousel-caption">
            <h1>Professional Choise</h1>
            <p>Programs for editing on base of FOSS.</p>
            <p><a class="btn btn-lg btn-primary" href="installed">Software</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/i3.webp" class="bd-placeholder-img" width="100%" height="100%" alt="...">

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>I3 build</h1>
            <p>Tiling window manager - for expirienced users</p>
            <p><a class="btn btn-lg btn-primary" href="download/i3">Dowload i3 build</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->
<br><br>
  <div class="container marketing">

    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4">
        <img src="/cd.png" class="rounded-circle bd-placeholder-img" width="140" height="140" alt="...">

        <h2>CD Image</h2>
        <p>install os from flashcard today</p>
        <p><a class="btn btn-secondary" href="download">download &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img src="/orange.png" class="rounded-circle bd-placeholder-img" width="140" height="140" alt="...">

        <h2>A lot of oranges</h2>
        <p>Lot of packages are preinstalled for out-of-the-box expirience</p>
        <p><a class="btn btn-secondary" href="installed">details &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img src="/croc.png" class="rounded-circle bd-placeholder-img" width="140" height="140" alt="...">

        <h2>No crocodiles</h2>
        <p>In Cheburashka OS you will not find any visuses or spyware</p>
        <p><a class="btn btn-secondary" href="viruses">completely &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
    </div><!-- /.row -->


    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-6">
        <h2 class="featurette-heading">Cheburashka OS is Stable<span class="text-muted">It’ll blow your mind.</span></h2>
        <br>
        <p class="lead">Version 2022 supports until 2027 and security-updates untill 2032! which is longesr support LTS system evalible now besides EPEL</p>
      </div>
      <div class="col-md-6">
        <img src="/stable.png" class="rounded bd-placeholder-img img-fluid" max-width="500" max-height="500" alt="...">

      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-76order-md-2">
        <h2 class="featurette-heading">Oh yeah, who is the.. <span class="text-muted">"Cheburashka"?</span></h2>
        <p class="lead">Cheburashka is famos russian character. also known as Topple in earlier English translations, is a fictional character created by Soviet writer Eduard Uspensky in his 1965 children's book Krokodil Gena i yevo druzia. The character subsequently appeared as the protagonist in a series of stop-motion animated films by Roman Kachanov (Soyuzmultfilm studio), the first of which was made in 1969</p>
      </div>
      <div class="col-md-6 order-md-1">
        <img src="/q2.webp" class="rounded bd-placeholder-img img-fluid" max-width="500" max-height="500" alt="...">

      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-6">
        <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
        <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
      </div>
      <div class="col-md-6">
        <img src="/q3.webp" class="rounded bd-placeholder-img img-fluid" max-width="500" max-height="500" alt="...">

      </div>
    </div>

    <hr class="featurette-divider">

    <!-- /END THE FEATURETTES -->

  </div><!-- /.container -->

