
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Политика конфиденциальности</title>
    <?php wp_head() ?>
    <?php $page_id = get_the_ID() ?> 
  </head>
  <body style="margin:0">
    <embed style="width:100%; height:100vw" src="<?php echo carbon_get_post_meta($page_id, 'policy_url')?>" width="600" height="780" type="application/pdf">
    <?php wp_footer() ?>
  </body>
  </html>