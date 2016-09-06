<?php

class DS_Slider_Block_Slider extends Mage_Core_Block_Template
{

    public function getSliderCollection()
    {
        $sliderCollection = Mage::getModel('dsslider/slider')->getCollection();
        $sliderCollection->setOrder('created', 'DESC');
        return $sliderCollection;
    }

}