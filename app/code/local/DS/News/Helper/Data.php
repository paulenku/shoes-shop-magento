<?php

class DS_News_Helper_Data extends Mage_Core_Helper_Abstract
{

    public function getImagePath($id = 0)
    {
        $path = Mage::getBaseDir('media') . '/ds_news';
        if ($id) {
            return "{$path}/{$id}.jpg";
        } else {
            return $path;
        }
    }

    public function getImageUrl($id = 0)
    {
        $url = Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_MEDIA) . 'ds_news/';
        if ($id) {
            return $url . $id . '.jpg';
        } else {
            return $url;
        }
    }

}