<?php

class DS_Slider_Model_Resource_Slider extends Mage_Core_Model_Mysql4_Abstract
{

    public function _construct()
    {
        $this->_init('dsslider/table_slider', 'img_id');
    }

}