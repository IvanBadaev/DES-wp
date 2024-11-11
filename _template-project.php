<?php 
    $item_id = get_the_ID();
    $imgurl = (wp_get_attachment_url( get_post_thumbnail_id($item_id), 'thumbnail' ));
?>

<div class="slide transition duration-500">
    <img
    src="<?php echo $imgurl?>"
    alt="project photo"
    class="mb-2.5"
    />
    <p
    class="text-4 text-lightgrey font-mont slide-text max-w-[500px] project-text"
    >
    <?php the_title() ?>
    </p>
</div>