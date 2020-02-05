var config = {
    paths: {
            'bootstrap':'js/bootstrap.min',
    } ,
    shim: {
        'bootstrap': {
            'deps': ['jquery']
        }
    },
	config: {
        mixins: {
            'mage/validation': {
                'Magento_Theme/js/lib/mage/validation-mixin': true
            }
        }
    }
};

