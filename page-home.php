<!DOCTYPE html>

<html lang="en" class="overflow-x-hidden">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Движение Энергия Сотрудничество</title>
  </head>
  <body
    class="bg-gradient-to-r from-bg-black via-bg-grey via-bg-white via-bg-grey to-bg-black overflow-x-hidden"
  >
    <?php get_header() ?>
    <?php 
      $page_id = get_the_ID();
      $directory_uri = get_template_directory_uri(); 
    ?>
    <main>
      <section class="section relative " id="hero">
        <video autoplay muted loop id="hero-video" class="hero-video">
          <source src="<?php echo $directory_uri?>/public/waves.webm" type="video/mp4">
        </video>
        <div class="js-hero-looper hero-looper">
          <h1 class="hero-looper-element hero-shadow text-20 md:text-30 clg:text-40 text-white text-center font-lato py-10 hero-title">
            <span>Движение</span>
          </h1>
          <h1 class="hero-looper-element hero-shadow text-20 md:text-30 clg:text-40 text-white text-center font-lato py-10 hero-title">
            <span>Энергия </span>
          </h1>
          <h1 class="hero-looper-element hero-shadow text-20 md:text-30 clg:text-40 text-white text-center font-lato py-10 hero-title">
            <span>Сотрудничество</span>
          </h1>
          <h1 class="hero-looper-element hero-shadow text-20 md:text-30 clg:text-40 text-white text-center font-lato py-10 hero-title">
            <span>Движение</span>
          </h1>
        </div>
      </section>
      <section class="container section">
        <div class="flex border border-lightgrey overflow-scroll 2xl:overflow-hidden about-container">
          <article
            class="border-r border-lightgrey px-13 py-10 flex-1 group hover:bg-lightgrey hover:cursor-pointer transition duration-200 box-border about-slide--first about-slide"
          >
            <h2 class="pt-10 pb-10 flex items-center gap-5">
              <svg
                width="35"
                height="95"
                viewBox="0 0 35 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 1.5L2 47.5L33 93.5"
                  stroke-width="3"
                  class="stroke-[#DBDBDB] group-hover:stroke-textgreen"
                />
              </svg>
              <p
                class="text-lightgrey group-hover:text-textgreen text-25 font-lato about-slide-title"
              >
              <?php echo carbon_get_theme_option('about_complexes')?>

              </p>
            </h2>
            <p
              class="text-lightgrey group-hover:text-textgreen text-4.5 font-lato uppercase"
            >
              МВТ ЭНЕРГОКОМПЛЕКСОВ
            </p>
          </article>
          <article
            class="border-r border-lightgrey px-13 py-10 flex-1 group hover:bg-lightgrey hover:cursor-pointer transition duration-200 box-border about-slide--mid about-slide"
          >
            <h2 class="pt-10 pb-10 flex items-center gap-5">
              <svg
                width="35"
                height="95"
                viewBox="0 0 35 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 1.5L2 47.5L33 93.5"
                  stroke-width="3"
                  class="stroke-[#DBDBDB] group-hover:stroke-textgreen"
                />
              </svg>
              <p
                class="text-lightgrey group-hover:text-textgreen text-25 font-lato about-slide-title"
              >
              <?php echo carbon_get_theme_option('about_personnel')?>

              </p>
            </h2>
            <p
              class="text-lightgrey group-hover:text-textgreen text-4.5 font-lato uppercase"
            >
            СОТРУДНИКОВ
            </p>
          </article>
          <article
            class="border-r border-lightgrey px-13 py-10 flex-1 group hover:bg-lightgrey hover:cursor-pointer transition duration-200 box-border about-slide--mid about-slide"
          >
            <h2 class="pt-10 pb-10 flex items-center gap-5">
              <svg
                width="35"
                height="95"
                viewBox="0 0 35 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 1.5L2 47.5L33 93.5"
                  stroke-width="3"
                  class="stroke-[#DBDBDB] group-hover:stroke-textgreen"
                />
              </svg>
              <p
                class="text-lightgrey group-hover:text-textgreen text-25 font-lato about-slide-title"
              >
              <?php echo carbon_get_theme_option('about_projects')?>

              </p>
            </h2>
            <p
              class="text-lightgrey group-hover:text-textgreen text-4.5 font-lato uppercase"
            >
            РЕАЛИЗОВАННЫХ ПРОЕКТОВ
            </p>
          </article>
          <article
            class="border-r border-lightgrey px-13 py-10 flex-1 group hover:bg-lightgrey hover:cursor-pointer transition duration-200 box-border about-slide--last about-slide"
          >
            <h2 class="pt-10 pb-10 flex items-center gap-5">
              <svg
                width="35"
                height="95"
                viewBox="0 0 35 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 1.5L2 47.5L33 93.5"
                  stroke-width="3"
                  class="stroke-[#DBDBDB] group-hover:stroke-textgreen"
                />
              </svg>
              <p
                class="text-lightgrey group-hover:text-textgreen text-25 font-lato about-slide-title"
              >
              <?php echo carbon_get_theme_option('about_years')?>

              </p>
            </h2>
            <p
              class="text-lightgrey group-hover:text-textgreen text-4.5 font-lato uppercase"
            >
            ЛЕТ УСПЕШНОЙ РАБОТЫ
            </p>
          </article>
        </div>
      </section>
      <section
        class="container section flex flex-col items-center"
        id="about"
      >
        <div class="about-text w-[75%] m-[auto] text-center about-text">
          <h1
            class="text-white text-7.5 lg:text-10 text-center uppercase font-lato lg:pb-17.5 pb-10"
          >
            О КОМПАНИИ
          </h1>
          <p class="text-white text-5 md:text-6 lg:text-8 text-center font-mont pb-5">
            <a href="#header" class="green-bright js-anchor-link">ООО «Д.Э.С.»</a> – <br class="block lg:hidden">
             высокопрофессиональная сервисная компания в области оказания
            комплексных услуг по эксплуатации
            <a href="#projects" class="green-bright js-anchor-link">объектов энергоснабжения.</a>
          </p>
          <p class="text-white text-5 md:text-6 lg:text-8 text-center font-mont">
            Предлагаем комплексные технические решения, основанные на имеющемся
            опыте, высокой профессиональной подготовке и оптимальной
            экономической модели.
          </p>
        </div>
      </section>
      <section class="section" id="projects">
        <h1 class="text-white text-8 md:text-10  text-center uppercase font-lato md:pb-17.5 pb-10">
          РЕАЛИЗОВАННЫЕ ПРОЕКТЫ
        </h1>
        <div class="pb-15 js-project-swiper-wrapper relative">
          <button
            class="doubleSwiperBtn doubleSwiperBtn--left js-btn-prev absolute top-[45%] translate-y-[-50%] left-[50px] z-10 opacity-50"
          >
            <svg
              width="46"
              height="127"
              viewBox="0 0 46 127"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 1.5L2 63.5L45 125.5"
                stroke="white"
                stroke-opacity="0.6"
                stroke-width="2"
              />
            </svg>
          </button>
          <div class="w-[max-content] js-projects-swiper swiper-wrapper lg-overflow-hidden">
            <?php
                $projects = carbon_get_post_meta($page_id, 'projects');
                $project_ids = wp_list_pluck($projects, 'id');

                $projects_query_args = [
                  'post_type' => 'project',
                  'post__in' => $project_ids,
                  'orderby' => 'id',
                ];
                $projects_query = new WP_Query($projects_query_args);

                if ($projects_query) {
                  while ($projects_query->have_posts()) : $projects_query->the_post();
                    echo get_template_part('_template-project');
                  endwhile;

                 wp_reset_postdata();
                }

              ?>
          </div>
          <button
            class="doubleSwiperBtn doubleSwiperBtn--right js-btn-next absolute top-[45%] translate-y-[-50%] right-[50px] z-10 opacity-50"
          >
            <svg
              width="46"
              height="127"
              viewBox="0 0 46 127"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L44 63.5L1 125.5"
                stroke="white"
                stroke-opacity="0.6"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
        <div class="flex justify-center">
          <a
            href="#contacts"
            class="js-projects-under-swiper-btn double-swiper-btn py-4 w-33% text-center uppercase font-mont text-4.5 bg-gradient-to-b from-lightgreen to-darkgreen text-white font-normal js-anchor-link"
          >
            Обсудить проект
          </a>
        </div>
      </section>
      <section class="section container container--collapse" id="services">
        <h1 class="text-white text-8 md:text-10  text-center uppercase font-lato md:pb-17.5 pb-10">
          Наши услуги
        </h1>
        <div class="js-vacancies-swiper-wrapper relative">
            <button
            class="js-services-btn-prev services-btn services-btn--prev vacancies-swiper-btn absolute top-[245px] left-[10%] z-10 clg:hidden block"
            >
            <svg
                width="31"
                height="92"
                viewBox="0 0 46 127"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path class="stroke-arrow-grey"
                d="M45 1.5L2 63.5L45 125.5"
                stroke-opacity="0.6"
                stroke-width="2"
                />
            </svg>
            </button>
            <button
            class="js-services-btn-next services-btn services-btn--next vacancies-swiper-btn absolute top-[245px] right-[10%] z-10 clg:hidden block"
            >
            <svg
                width="31"
                height="92"
                viewBox="0 0 46 127"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path class="stroke-arrow-grey"
                d="M1 1.5L44 63.5L1 125.5"
                stroke-opacity="0.6"
                stroke-width="2"
                />
            </svg>
            </button>
            <div class="flex gap-0 js-services-container">
            <article
                class="js-services-card services-card-1 services-card transition ease-in duration-130 group flex flex-col justify-between h-[640px] before:bg-no-repeat before:bg-cover before:bg-center p-5 flex-1 overflow-hidden relative before:w-[100%] before:transition before:duration-500 before:h-[100%] before:absolute before:start-0 before:top-0 bg-lightgrey before:-z-10 before:bg-cover duration-500"
            >
                <h2
                class="text-textgreen text-22.5 font-lato font-light transition ease-in duration-130 group-hover:text-white"
                >
                01
                </h2>
                <details class="js-services-details">
                <summary
                    class="text-5 text-black uppercase font-lato group-hover:text-white group-hover:pb-17.5 transition ease-in duration-130 group-hover:animate-[slideUp_ease-in_0.4s_forwards]"
                >
                    Автономное энергоснабжение
                </summary>
                <ul
                    class="js-services-list transition-all ease-in duration-３30 font-mont text-white text-4 list-disc group-hover:text-white max-w-80% ml-2.5 group-hover:animate-[slideUp_ease-in_0.4s_forwards]"
                >
                <?php
                      $services = carbon_get_post_meta($page_id, 'services');
                      $service_ids = wp_list_pluck($services, 'id');

                      $services_query_args = [
                        'post_type' => 'service',
                        'post__in' => $service_ids,
                        'orderby' => 'id',
                        'meta_query' => array(
                          array(
                            'key' => 'service_type',
                            'value'     => 'energo',
                            'compare' => '='
                        )
                        )
  
                      ];
                      $services_query = new WP_Query($services_query_args);

                      while ($services_query->have_posts()) : $services_query->the_post();
                        echo get_template_part('_template-service');
                      endwhile;

                      wp_reset_postdata()
                    ?>
                </ul>
                </details>
            </article>
            <article
                class="js-services-card services-card services-card-2 transition ease-in duration-130 group flex flex-col justify-between h-[640px] before:bg-no-repeat before:bg-cover before:bg-center p-5 flex-1 overflow-hidden relative before:w-[100%] before:transition before:duration-500 before:h-[100%] before:absolute before:start-0 before:top-0 bg-lightgrey before:hover:bg-[url('/public/images/services/vent.jfif')] before:-z-10 before:bg-cover duration-500"
            >
                <h2
                class="text-textgreen text-22.5 font-lato font-light transition ease-in duration-130 group-hover:text-white"
                >
                02
                </h2>
                <details class="js-services-details">
                <summary
                    class="text-5 text-black uppercase font-lato group-hover:text-white group-hover:pb-17.5 transition ease-in duration-130 group-hover:animate-[slideUp_ease-in_0.4s_forwards]"
                >
                Системы
пароводоснабжения 
                </summary>
                <ul
                    class="js-services-list transition-all ease-in duration-３30 font-mont text-white text-4 list-disc group-hover:text-white max-w-80% ml-2.5 group-hover:animate-[slideUp_ease-in_0.4s_forwards]"
                >
                    <?php
                      $services = carbon_get_post_meta($page_id, 'services');
                      $service_ids = array_reverse(wp_list_pluck($services, 'id'));

                      $services_query_args = [
                        'post_type' => 'service',
                        'post__in' => $service_ids,
                        'orderby' => 'id',
                        'meta_query' => array(
                          array(
                            'key' => 'service_type',
                            'value'     => 'steam',
                            'compare' => '=',
                            'orderby' => 'id',
                            'order' => 'DESC',
                        )
                        )

                      ];
                      $services_query = new WP_Query($services_query_args);

                      while ($services_query->have_posts()) : $services_query->the_post();
                        echo get_template_part('_template-service');
                      endwhile;

                      wp_reset_postdata()
                    ?>
                </ul>
                </details>
            </article>
            <article
            class="js-services-card services-card services-card-3 transition ease-in duration-130 group flex flex-col justify-between h-[640px] before:bg-no-repeat before:bg-cover before:bg-center p-5 flex-1 overflow-hidden relative before:transition before:duration-500 before:start-0 before:top-0 bg-lightgrey before:absolute before:top-0 before:left-0 before:h-[100%] before:w-[100%] hover:before:bg-[url('/public/images/services/vent.jfif')] before:-z-10 before:bg-cover duration-500"
        >
            <h2
            class="text-textgreen text-22.5 font-lato font-light transition ease-in duration-130 group-hover:text-white"
            >
            03
            </h2>
            <details class="js-services-details">
            <summary
                class="text-5 text-black uppercase font-lato group-hover:text-white group-hover:pb-17.5 transition ease-in duration-130 group-hover:animate-[slideUp_ease-in_0.4s_forwards]"
            >
            Эксплуатация и обслуживание
            </summary>
            <ul
                class="js-services-list transition-all ease-in duration-３30 font-mont text-white text-4 list-disc group-hover:text-white max-w-80% ml-2.5 group-hover:animate-[slideUp_ease-in_0.4s_forwards]"
            >
            <?php
                      $services = carbon_get_post_meta($page_id, 'services');
                      $service_ids = wp_list_pluck($services, 'id');

                      $services_query_args = [
                        'post_type' => 'service',
                        'post__in' => $service_ids,
                        'orderby' => 'id',
                        'meta_query' => array(
                          array(
                            'key' => 'service_type',
                            'value'     => 'exploit',
                            'compare' => '=',
                            'orderby' => 'id',
                            'order' => 'DESC'
                        )
                        )

                      ];
                      $services_query = new WP_Query($services_query_args);

                      while ($services_query->have_posts()) : $services_query->the_post();
                        echo get_template_part('_template-service');
                      endwhile;

                      wp_reset_postdata()
                    ?>
            </ul>
            </details>
            </article>
            <article
            class="js-services-card services-card services-card-4 transition ease-in duration-130 group flex flex-col justify-between h-[640px] before:bg-no-repeat before:bg-cover before:bg-center p-5 flex-1 overflow-hidden relative before:w-[100%] before:transition before:duration-500 before:h-[100%] before:absolute before:start-0 before:top-0 bg-lightgrey before:hover:bg-[url('/public/images/services/vent.jfif')] before:-z-10 before:bg-cover duration-500"
        >
            <h2
            class="text-textgreen text-22.5 font-lato font-light transition ease-in duration-130 group-hover:text-white"
            >
            04
            </h2>
            <details class="js-services-details">
            <summary
                class="text-5 text-black uppercase font-lato group-hover:text-white group-hover:pb-17.5 transition ease-in duration-130 group-hover:animate-[slideUp_ease-in_0.4s_forwards]"
            >
            Сервис
            </summary>
            <ul
                class="js-services-list transition-all ease-in duration-３30 font-mont text-white text-4 list-disc group-hover:text-white max-w-80% ml-2.5 group-hover:animate-[slideUp_ease-in_0.4s_forwards]"
            >
            <?php
                      $services = carbon_get_post_meta($page_id, 'services');
                      $service_ids = wp_list_pluck($services, 'id');

                      $services_query_args = [
                        'post_type' => 'service',
                        'post__in' => $service_ids,
                        'orderby' => 'id',
                        'meta_query' => array(
                          array(
                            'key' => 'service_type',
                            'meta_key' => 'id',
                            'value'     => 'servicing',
                            'compare' => '=',
                            'orderby' => 'meta_value_num',
                            'order' => 'DESC',
                        )
                        )

                      ];
                      $services_query = new WP_Query($services_query_args);

                      while ($services_query->have_posts()) : $services_query->the_post();
                        echo get_template_part('_template-service');
                      endwhile;

                      wp_reset_postdata()
                    ?>
            </ul>
            </details>
            </article>

            </div>
        </div>

      </section>
      <section class="section" id="partners">
        <h1 class="text-white text-8 md:text-10  text-center uppercase font-lato pb-10 md:pb-17.5">
          Наши партнёры
        </h1>
        <div
          class="js-partners-cards flex flex-col gap-10 overflow-hidden relative"
        >
          <div
            class="js-partners-card-row flex justify-between relative w-[max-content] h-[175px] items-center gap-5"
          >
              <article
                  class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
                >
              <img
                src="<?php echo $directory_uri?>/public/images/partners/vortex.png"
                class="object-contain image-fadeout"
                alt="company logo"
              />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/vortex full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
              class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
              <img
                src="<?php echo $directory_uri?>/public/images/partners/cck.png"
                class="object-contain image-fadeout"
                alt="company logo"
              />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/cck full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
              class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
              <img
                src="<?php echo $directory_uri?>/public/images/partners/Sibur_Holding_Logo.png"
                class="object-contain image-fadeout"
                alt="company logo"
              />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/Sibur_Holding_Logo full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
              class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
            <img
                src="<?php echo $directory_uri?>/public/images/partners/gaz-neft.png"
                class="object-contain image-fadeout"
                alt="company logo"
              />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/gaz-neft full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
              class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
              <img
                  src="<?php echo $directory_uri?>/public/images/partners/slavneft krasnoyarsk.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/slavneft krasnoyarsk full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
              class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
              <img
                  src="<?php echo $directory_uri?>/public/images/partners/lukoil.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/lukoil full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
              class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
              <img
                  src="<?php echo $directory_uri?>/public/images/partners/rusneft.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/rusneft full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
            <img
                  src="<?php echo $directory_uri?>/public/images/partners/rig.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/rig full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
          </div>
          <div
            class="js-partners-card-row flex justify-between relative w-[max-content] h-[175px] items-center gap-5"
          >
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
            <img
                  src="<?php echo $directory_uri?>/public/images/partners/rig.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/rig full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
            <img
                  src="<?php echo $directory_uri?>/public/images/partners/slavneft megion.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/slavneft megion full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
            <img
                  src="<?php echo $directory_uri?>/public/images/partners/ummc.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/ummc full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
            <img
                  src="<?php echo $directory_uri?>/public/images/partners/rosneft.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/rosneft full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
              class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
              <img
                src="<?php echo $directory_uri?>/public/images/partners/aggreko-logo 1.png"
                class="object-contain image-fadeout"
                alt="company logo"
              />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/aggreko-full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
            <img
                  src="<?php echo $directory_uri?>/public/images/partners/gaz-bur.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/gaz-bur full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
              <img
                src="<?php echo $directory_uri?>/public/images/partners/baker hughes.png"
                class="object-contain image-fadeout"
                alt="company logo"
              />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/baker hughes full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
            <img
                  src="<?php echo $directory_uri?>/public/images/partners/slb.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/slb full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
          </div>
          <div
            class="js-partners-card-row flex justify-between relative w-[max-content] h-[175px] items-center gap-5"
          >
            <article
              class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >

              <img
                  src="<?php echo $directory_uri?>/public/images/partners/med.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/med full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
              <img
                src="<?php echo $directory_uri?>/public/images/partners/baker hughes.png"
                class="object-contain image-fadeout"
                alt="company logo"
              />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/baker hughes full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
              <img
                  src="<?php echo $directory_uri?>/public/images/partners/ink.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/ink full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
            <img
                  src="<?php echo $directory_uri?>/public/images/partners/Bashneft Logo Vector 1.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/Bashneft Logo Vector full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
            <img
                  src="<?php echo $directory_uri?>/public/images/partners/xy.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/xy full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
            <img
                  src="<?php echo $directory_uri?>/public/images/partners/putok.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/putok full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
            <img
                  src="<?php echo $directory_uri?>/public/images/partners/slavneft yaroslavl.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/slavneft yaroslavl full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
            <article
            class="flex justify-center align-center w-[270px] h-[175px] p-2.5 border border-lightgrey card__slide-right--forwards partner-card"
            >
            <img
                  src="<?php echo $directory_uri?>/public/images/partners/mubr.png"
                  class="object-contain image-fadeout"
                  alt="company logo"
                />
              <img 
                src="<?php echo $directory_uri?>/public/images/partners/mubr full.png" 
                class="object-contain image-fadein" 
                alt="company logo"/>
            </article>
          </div>
        </div>
      </section>
      <section class="section" id="vacancies">
        <h1 class="text-white text-8 md:text-10  text-center uppercase font-lato pd-10 md:pb-17.5 pb-10">
          Вакансии
        </h1>
        <div class="vacancies-swiper-wrapper relative pb-[100px]">
          <div class="js-vacancies-swiper flex items-center gap-5 w-[100vw]">
            <?php 
              $vacancies = carbon_get_theme_option('vacancies');
              $vacancies_count = count($vacancies);
              $vacancy_phone = carbon_get_theme_option('vacancies_phone');
              $vacancy_room = carbon_get_theme_option('vacancies_room');

                foreach ($vacancies as $vacancy_entry) {
                  $mail = apply_shortcodes( '[contact-form-7 id="d90ba01" title="Отклик на вакансию"]' );
                  $vacancy_name = $vacancy_entry['vacancy_name'];
                  $vacancy_slide = '<div
                  class="js-vacancies-slide py-10 px-5 md:px-10 lg:px-17.5 vacancies--hide border border-white bg-transparent box-border h-[230px] w-[300px] rounded"
                >
                  <div class="flex flex-col md:flex-row gap-5 lg:gap-10 justify-between pb-2.5 xs:pb-5 md:pb-10 lg:pb-15">
                    <h3
                      class="uppercase text-5 text-white font-lato font-normal vacancies-collapsible-all"
                    >' . $vacancy_name . '</h3>
                    <div
                      class="flex flex-row md:flex-col gap-2.5 w-[max-content] font-lato text-3.5 md:text-4 vacancies-collapsible"
                    >
                      <a href=tel:' . str_replace(' ', '', $vacancy_phone) . ' class="mb-2 green-link">' . $vacancy_phone . '</a>
                      <p>' . $vacancy_room . ' (отдел кадров)</p>
                    </div>
                  </div>
                  <div

                    class="flex flex-col gap-2.5 vacancies-collapsible"
                  >' . $mail . '
                  </div>
                </div>';
                if ($vacancies_count == 1) {
                  echo wp_specialchars_decode($vacancy_slide, ENT_QUOTES );
                  echo wp_specialchars_decode($vacancy_slide, ENT_QUOTES );
                } else {
                  echo wp_specialchars_decode($vacancy_slide, ENT_QUOTES );
                }
              }

            ?>
          </div>
          <button
            class="js-vacancies-btn-prev vacancies-btn-prev vacancies-swiper-btn absolute top-[245px]"
          >
            <svg
              width="38"
              height="105"
              viewBox="0 0 46 127"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="vacancies-arrow"
                d="M45 1.5L2 63.5L45 125.5"
                stroke="white"
                stroke-opacity="0.6"
                stroke-width="2"
              />
            </svg>
          </button>
          <button
            class="js-vacancies-btn-next vacancies-btn-next vacancies-swiper-btn absolute top-[245px]"
          >
            <svg
              width="38"
              height="105"
              viewBox="0 0 46 127"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="vacancies-arrow"
                d="M1 1.5L44 63.5L1 125.5"
                stroke="white"
                stroke-opacity="0.6"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
        <div class="container text-3 md:text-4 font-mont text-white max-w-[800px] m-[auto]">
          <h5 class="pb-10">
            Компания ООО «Д.Э.С.» создает комфортные условия работы и
            гарантирует:
          </h5>
          <div class="flex flex-col lg:flex-row">
            <ul class="flex flex-col gap-2.5 pr-10">
              <li>− Работу в стабильной, развивающейся компании</li>
              <li>− Оформление трудового договора в соответствии с ТК РФ</li>
              <li>
                − Официальная, своевременная заработная плата 2 раза в месяц
              </li>
              <li>− Дополнительное премирование по итогам работы за месяц</li>
              <li>
                − Оплата медицинской комиссии при трудоустройстве в полном
                объеме
              </li>
              <li>
                − Обеспечение фирменной спецодеждой для работы на производстве
              </li>
            </ul>
            <ul class="flex flex-col gap-2.5">
              <li>
                − Проживание в комфортабельных вагончиках на объектах за счет
                работодателя
              </li>
              <li>
                − Компенсация проезда к месту работы и обратно (в т.ч. проезда
                при трудоустройстве)
              </li>
              <li>− Компенсация стоимости питания (для вахтового персонала)</li>
              <li>− Оплачиваемый отпуск и прочие социальные льготы</li>
              <li>− Повышения квалификации персонала за счет работодателя</li>
              <li>
                − Оказание материальной помощи в трудных жизненных ситуациях
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="bg-lightgrey pb-17.5 lg:pb-[170px]" id="contacts">
        <div class="container pt-17.5 lg:pt-[170px]">
          <h1 class="text-8 md:text-10 text-center uppercase font-lato">
            Оставьте заявку
          </h1>
          <?php 
            $mail = apply_shortcodes( '[contact-form-7 id="fe2bc13" title="Заявка на звонок"]' );
            echo wp_specialchars_decode($mail);
          ?>
        </div>
    </section>
    </main>
    <?php get_footer() ?>
  </body>
</html>
