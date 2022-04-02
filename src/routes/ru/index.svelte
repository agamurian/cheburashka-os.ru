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
            <h1>Чебурашка ОС</h1>
            <p>Свободная операционная система для современного пользователя</p>
            <p><a class="btn btn-lg btn-primary" href="download">Скачать</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/cinnamon.webp" class="bd-placeholder-img" width="100%" height="100%" alt="...">

        <div class="container">
          <div class="carousel-caption">
            <h1>Профессионалльный выбор</h1>
            <p>Программы для профессионалов на основе свободного ПО.</p>
            <p><a class="btn btn-lg btn-primary" href="installed">Программы</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/i3.webp" class="bd-placeholder-img" width="100%" height="100%" alt="...">

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>I3 сборка<h1>
            <p>Тайловый оконный менеджер - для закаленных пользователей</p>
            <p><a class="btn btn-lg btn-primary" href="download/i3">Скачать сборку с i3</a></p>
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

        <h2>Образ CD</h2>
        <p>установите чебурашку-ос сегодня!</p>
        <p><a class="btn btn-secondary" href="download">Скачать &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img src="/orange.png" class="rounded-circle bd-placeholder-img" width="140" height="140" alt="...">

        <h2>Много апельсинов!</h2>
        <p>Большое разнообразие предустановленых пакетов</p>
        <p><a class="btn btn-secondary" href="installed">Посмотреть &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img src="/croc.png" class="rounded-circle bd-placeholder-img" width="140" height="140" alt="...">

        <h2>Никаких крокодилов!</h2>
        <p>В операционной системе Чебуршка нет вирусов и вредоностного программного обеспечения</p>
        <p><a class="btn btn-secondary" href="viruses">Никаких &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
    </div><!-- /.row -->


    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-6">
        <h2 class="featurette-heading">Cheburashka Os is Stable<br>
          <span class="text-muted">It’ll blow your mind.</span></h2>
        <p class="lead">Version 2022 supports until 2027 and security-updates untill 2032! which is longesr support LTS system evalible now besides EPEL</p>
      </div>
      <div class="col-md-6">
        <img src="/stable.webp" class="rounded bd-placeholder-img img-fluid" max-width="500" max-height="500" alt="...">

      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-6 order-md-2">
        <h2 class="featurette-heading">Ах да, кто такой этот..<span class="text-muted">"Чебурашка"</span></h2>
        <p class="lead">Чебура́шка — персонаж, придуманный писателем Эдуардом Успенским в 1966 году как один из главных героев книги «Крокодил Гена и его друзья» и её продолжений. После выхода мультфильма Романа Качанова «Крокодил Гена», снятого по этой книге в 1969 году, персонаж стал широко известен.</p>
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

