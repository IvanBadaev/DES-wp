<?php

if (!defined('ABSPATH')) {
    exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

Container::make( 'theme_options', __( 'Найстроки контента' ) )
->add_tab('Цифры в разделе "О компании"', [
    Field::make( 'text', 'about_complexes', 'МВТ ЭНЕРГОКОМПЛЕКСОВ' ),
    Field::make( 'text', 'about_personnel', 'СОТРУДНИКОВ' ),
    Field::make( 'text', 'about_projects', 'РЕАЛИЗОВАННЫХ ПРОЕКТОВ' ),
    Field::make( 'text', 'about_years', 'ЛЕТ УСПЕШНОЙ РАБОТЫ' ),
])
->add_tab('Вакансии', [
    Field::make('text', 'vacancies_phone', 'Номер отдела кадров'),
    Field::make('text', 'vacancies_room', 'Кабинет(ы) отдела кадров'),
    Field::make( 'complex', 'vacancies', 'Вакансии' )
    ->add_fields( array(
        Field::make( 'text', 'vacancy_name', 'Добавить вакансию' ),
    )),
])
->add_tab('Общая информация (подвал)', [
    Field::make('text', 'main_schedule', 'График работы'),
    Field::make('text', 'main_phone', 'Номер горячей линии'),
])
->add_tab('Главный офис (подвал)', [
    Field::make('text', 'office_location','Адрес офиса'),
    Field::make( 'complex', 'office_phones', 'Контактные номера' )
    ->add_fields( array(
        Field::make( 'text', 'contact_phone', 'Добавить контактный номер' ),
    )),
    Field::make('text', 'office_mail', 'Электронная почта'),
])
->add_tab('Офис в Нижневартовске (подвал)', [
    Field::make('text', 'office_location_2', 'Адрес офиса'),
    Field::make( 'complex', 'office_phones_2', 'Контактные номера' )
    ->add_fields( array(
        Field::make( 'text', 'contact_phone', 'Добавить телефонный номер' ),
    )),
    Field::make('text', 'office_mail_2', 'Электронная почта'),
]);


Container::make('post_meta', 'Дополнительные поля')
->show_on_post_type('service')
->add_tab('Информация об услуге', [
    Field::make('select', 'service_type', 'Категория услуги')
    ->add_options( [
        'energo' => 'Автономное энергоснабжение',
        'steam' => 'Системы
        пароводоснабжения',
        'exploit' => 'Эксплуатация и обслуживание',
        'servicing' => 'Сервис',
    ]),

]);

Container::make( 'post_meta', __( 'Дополнительные поля' ) )
->show_on_page(9)

->add_tab('Проекты', [
    Field::make("association", "projects", "Загрузить проекты")
    ->set_types([
        [
            'type' => 'post',
            'post_type' => 'project'
        ]
    ])
])
->add_tab('Услуги', [
    Field::make("association", "services", "Загрузить услуги")
    ->set_types([
        [
            'type' => 'post',
            'post_type' => 'service'
        ]
    ])
]);

Container::make( 'post_meta', __( 'Дополнительные поля' ) )
->show_on_page(13)

->add_tab('Файлы', [
    Field::make("file", "policy_url", "Политика конфиденциальности")
    ->set_value_type('url'),
]);