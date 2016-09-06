<?php

class DS_Slider_IndexController extends Mage_Core_Controller_Front_Action
{

    public function indexAction()
    {
        $this->loadLayout();
        $this->renderLayout();
    }

    public function viewAction()
    {
        $sliderId = Mage::app()->getRequest()->getParam('id', 0);
        $slider = Mage::getModel('dsslider/slider')->load($sliderId);

        if ($slider->getId() > 0) {
            $this->loadLayout();
            $this->getLayout()->getBlock('slider.content')->assign(array(
                "sliderItem" => $slider,
            ));
            $this->renderLayout();
        } else {
            $this->_forward('noRoute');
        }
    }

}