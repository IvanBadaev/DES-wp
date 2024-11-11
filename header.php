
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Движение Энергия Сотрудничество</title>
    <?php wp_head() ?>
    <?php $directory_uri = get_template_directory_uri(); ?>
  </head>
  <div class="container">
      <header
        class="flex items-center justify-between py-2.5 bg-red border-b border-transparent-grey" id="header"
      >
        <img
          srcset="<?php echo $directory_uri?>/public/images/logo-110px.png 110w, <?php echo $directory_uri?>/public/images/logo-168px.png 168w"
          sizes="(max-width: 728px) 110px,
                168px"
          src="<?php echo $directory_uri?>/public/images/logo-168px.png"
          alt="logo"
          class="pr-5"
        />
        <nav class="lg:flex items-center justify-between gap-17.5-cl hidden">
          <a
            href="#hero"
            class="js-anchor-link font-lato uppercase text-4.5-cl text-white hover:underline decoration-1 underline-offset-4"
            >главная</a
          >
          <a
            href="#about"
            class="js-anchor-link font-lato uppercase text-4.5-cl text-white hover:underline decoration-1 underline-offset-4"
            >О КОМПАНИИ</a
          >
          <a
            href="#services"
            class="js-anchor-link font-lato uppercase text-4.5-cl text-white hover:underline decoration-1 underline-offset-4"
            >УСЛУГИ</a
          >
          <a
            href="#vacancies"
            class="js-anchor-link font-lato uppercase text-4.5-cl text-white hover:underline decoration-1 underline-offset-4"
            >ВАКАНСИИ</a
          >
        </nav>
        <a
          href="#contacts"
          class="js-anchor-link py-4 px-9.5-cl ml-5 uppercase font-mont text-4.5-cl bg-gradient-to-b from-lightgreen to-darkgreen text-white font-normal lg:block hidden"
        >
          Заказать звонок
        </a>
        <button class="js-burger-btn lg:hidden block">
          <svg
            width="53"
            height="40"
            viewBox="0 0 53 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="burger-btn"
          >
            <rect
              width="53"
              height="5"
              transform="translate(0 0.875)"
              fill="url(#paint0_linear_205_2162)"
            />
            <rect
              width="38"
              height="5"
              transform="translate(15 17.375)"
              fill="url(#paint1_linear_205_2162)"
            />
            <rect
              width="27"
              height="5"
              transform="translate(26 34.125)"
              fill="url(#paint2_linear_205_2162)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_205_2162"
                x1="26.5"
                y1="5"
                x2="26.5"
                y2="1.27888e-07"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2F5F47" />
                <stop offset="1" stop-color="#50C088" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_205_2162"
                x1="19"
                y1="5"
                x2="19"
                y2="1.27888e-07"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2F5F47" />
                <stop offset="1" stop-color="#50C088" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_205_2162"
                x1="13.5"
                y1="5"
                x2="13.5"
                y2="1.27888e-07"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2F5F47" />
                <stop offset="1" stop-color="#50C088" />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <aside
          class="js-burger-menu burger-menu fixed hidden flex-col right-0 top-0 py-10 z-10"
        >
          <ul class="flex flex-col">
            <li class="w-[100%] box-border hover:bg-midgrey ">
              <a
                href="#hero"
                class="js-anchor-link js-burger-link burger-link font-lato uppercase text-4.5-cl text-white hover:underline decoration-1 underline-offset-4 px-5"
                >главная</a
              >
            </li>
            <li class="w-[100%] box-border hover:bg-midgrey ">
                <a
                href="#about"
                class="js-anchor-link js-burger-link burger-link font-lato uppercase text-4.5-cl text-white hover:underline decoration-1 underline-offset-4 px-5"
                >О КОМПАНИИ</a
              >
            </li>
            <li class="w-[100%] box-border hover:bg-midgrey ">
                <a
                href="#services"
                class="js-anchor-link js-burger-link burger-link font-lato uppercase text-4.5-cl text-white hover:underline decoration-1 underline-offset-4 px-5"
                >УСЛУГИ</a
              >
            </li>
            <li class="w-[100%] box-border hover:bg-midgrey ">
                <a
                href="#vacancies"
                class="js-anchor-link js-burger-link burger-link font-lato uppercase text-4.5-cl text-white hover:underline decoration-1 underline-offset-4 px-5"
                >ВАКАНСИИ</a
              >
            </li>
            <li class="w-[100%] box-border hover:bg-midgrey ">
                <a
                  href="#contacts"
                  class="js-anchor-link js-burger-link burger-link font-lato uppercase text-4.5-cl text-white hover:underline decoration-1 underline-offset-4 px-5"
                  >Заказать звонок</a
                >
            </li>
            <li class="w-[100%] py-5 box-border hover:bg-midgrey ">
                <button
                  class="js-burger-close-btn font-lato uppercase text-4.5-cl text-white hover:underline decoration-1 underline-offset-4 px-5 py-2.5 "
                  >Закрыть</button
                >
              </li>
          </ul>
        </aside>
      </header>
    </div>