<footer class="bg-darkgray" id="footer">
        <?php
                $page_id = get_the_ID();
                $directory_uri = get_template_directory_uri();

        ?>
      <div class="container pt-17.5 md:pt-[100px] lg:pt-17.5 px-5 xs:px-10 lg:px-17.5">
        <div class="text-lightgrey flex gap-5 md:flex-row flex-col pb-10 lg:pb-0">
            <div class="flex flex-1 flex-col justify-between lg:flex-row">
                <div class="flex-1">
                    <div class="flex-row flex md:block gap-2.5 md:flex-col pb-5">
                      <p class="pb-2.5 font-lato text-5">График работы:</p>
                      <p class="font-lato text-5">              <?php echo carbon_get_theme_option('main_schedule')?>
</p>
                    </div>
                    <div class="flex-row flex md:block gap-2.5 md:flex-col">
                      <p class="font-lato text-5 pb-2.5">"Горячая линия"</p>
                      <p
                        class="font-lato text-5  hover:underline underline-offset-4 decoration-1 hover:cursor-pointer"
                      >
                      <a href="tel:<?php echo str_replace(' ', '', carbon_get_theme_option('main_phone'))?>" class="mb-4 font-lato text-5 pb-2.5"><?php echo carbon_get_theme_option('main_phone')?></a>
                      </p>
                    </div>
                  </div>
                  <nav class="flex-1 flex-col gap-5 hidden lg:flex">
                    <a
                      href="#hero"
                      class="js-anchor-link font-lato text-5 hover:underline underline-offset-4 decoration-1"
                      >Главная</a
                    >
                    <a
                      href="#about"
                      class="js-anchor-link font-lato text-5 hover:underline underline-offset-4 decoration-1"
                      >О компании</a
                    >
                    <a
                      href="#services"
                      class="js-anchor-link font-lato text-5 hover:underline underline-offset-4 decoration-1"
                      >Услуги</a
                    >
                    <a
                      href="#vacancies"
                      class="js-anchor-link font-lato text-5 hover:underline underline-offset-4 decoration-1"
                      >Вакансии</a
                    >
                  </nav>
            </div>
            <div class="flex flex-1 gap-10 flex-col justify-between lg:flex-row">
                <address class="flex-1">
                    <p class="mb-5 font-lato text-4.5 max-w-100% md:max-w-80%">Главный офис:</p>
                    <p class="mb-5 font-lato text-4.5 max-w-100% md:max-w-80%">
                    <?php echo carbon_get_theme_option('office_location')?>
                    </p>
                    <div class="mb-5 font-lato text-4.5 max-w-100% md:max-w-80%">
                      <?php 
                      $phones_1 = carbon_get_theme_option('office_phones');
                      $index = 1;
                      $phones_count = count($phones_1);
                      foreach ($phones_1 as $phone_entry) {
                        $num = $phone_entry['contact_phone'];
                        if ($index < $phones_count) {
                          $a = '<a href=tel:' . str_replace(' ', '', $num) . ' class="hover:underline hover:cursor-pointer underline-offset-4 decoration-1">' . $num . ',</a><br/>';
                        } else {
                          $a = '<a href=tel:' . str_replace(' ', '', $num) . ' class="hover:underline hover:cursor-pointer underline-offset-4 decoration-1">' . $num . '</a><br/>';
                        }
                        $index += 1;
                        echo wp_specialchars_decode($a, ENT_QUOTES );
                      }
                      ?>
                    </div>
                    <a
                      href="mailto:<?php echo carbon_get_theme_option('office_mail')?>"
                      class="hover:underline hover:cursor-pointer underline-offset-4 decoration-1 font-lato text-4.5 max-w-100% md:max-w-80%"
                    >
                      Почта: <?php echo carbon_get_theme_option('office_mail')?>
                    </a>
                  </address>
                  <div class="flex-1">
                    <p class="mb-5 font-lato text-4.5 max-w-100% md:max-w-80%">
                      Офис в Нижневартовске:
                    </p>
                    <p class="mb-5 font-lato text-4.5 max-w-100% md:max-w-80%">
                      <?php echo carbon_get_theme_option('office_location_2')?>
                    </p>
                    <p
                      class="mb-5 font-lato text-4.5 max-w-100% md:max-w-80% hover:underline hover:cursor-pointer underline-offset-4 decoration-1"
                    >
                    <?php 
                      $phones_2 = carbon_get_theme_option('office_phones_2');
                      $index = 1;
                      $phones_count = count($phones_2);
                      foreach ($phones_2 as $phone_entry) {
                        $num = $phone_entry['contact_phone'];
                        if ($index < $phones_count) {
                          $a = '<a href=tel:' . str_replace(' ', '', $num) . ' class="hover:underline hover:cursor-pointer underline-offset-4 decoration-1">' . $num . ',</a><br/>';
                        } else {
                          $a = '<a href=tel:' . str_replace(' ', '', $num) . ' class="hover:underline hover:cursor-pointer underline-offset-4 decoration-1">' . $num . '</a><br/>';
                        }
                        $index += 1;
                        echo wp_specialchars_decode($a, ENT_QUOTES );
                      }
                      ?>
                    </p>
                    <a
                      href="mailto:<?php echo carbon_get_theme_option('office_mail_2')?>"
                      class="font-lato text-4.5 max-w-100% md:max-w-80% hover:underline hover:cursor-pointer underline-offset-4 decoration-1"
                    >
                      Почта: <?php echo carbon_get_theme_option('office_mail_2')?>
                    </a>
                  </div>
            </div>


        </div>
        <button
          class="js-scrolltop-btn w-[100%] flex justify-center md:justify-between items-center border-b border-darkish"
        >
          <img
            src="<?php echo $directory_uri?>/public/images/logo-168px.png"
            alt="logo"
            class="pr-5"
          />
          <svg
            width="46"
            height="18"
            viewBox="0 0 46 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 16.5L23 1.5L45 16.5"
              stroke="#D6D6D6"
              stroke-width="2"
              class="hidden md:block"
            />
          </svg>
        </button>
        <div class="flex flex-col md:flex-row justify-between items-center py-5 md:py-10 text-light-darkish">
          <a href="/DES/policy" class="underline underline-offset-4"> Политика конфиденциальности </a>
          <p>©️Все права защищены</p>
        </div>
      </div>
      <?php wp_footer() ?>
    </footer>

