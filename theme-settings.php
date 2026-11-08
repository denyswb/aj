<?php

/**
 * @file
 * Theme settings form for ajruiz_wp_v2 theme.
 */

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function ajruiz_wp_v2_form_system_theme_settings_alter(&$form, &$form_state) {

  $form['ajruiz_wp_v2'] = [
    '#type' => 'details',
    '#title' => t('ajruiz_wp_v2'),
    '#open' => TRUE,
  ];

  $form['ajruiz_wp_v2']['font_size'] = [
    '#type' => 'number',
    '#title' => t('Font size'),
    '#min' => 12,
    '#max' => 18,
    '#default_value' => theme_get_setting('font_size'),
  ];

}
