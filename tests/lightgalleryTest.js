var expect = chai.expect;

describe('LightGallery', function() {
    
    describe('Initialization', function() {

        beforeEach(function() {
            lightgallery.reset();
        });

        it('reset() function reset default options', function() {
            var imageAttrib = lightgallery.option('imageAttrib');
            var showOverlay = lightgallery.option('showOverlay');

            lightgallery.setOptions({
                imageAttrib: 'data-picture',
                showOverlay: false
            });

            expect(lightgallery.option('imageAttrib')).to.equal('data-picture');
            expect(lightgallery.option('showOverlay')).to.equal(false);

            lightgallery.reset();

            expect(lightgallery.option('imageAttrib')).to.equal(imageAttrib);
            expect(lightgallery.option('showOverlay')).to.equal(showOverlay);
        });

        it('it is possible to set options', function() {
            var options = {
                showOverlay     : false,
                overlayColor    : '#333',
                overlayOpacity  : 0.55,
                zoomStep        : 0.3,
                animate         : true,
                duration        : 500,
                resizeSync      : true,
                enableZoom      : false,
                fadeImage       : false,
                fullSize        : false,
                minPadding      : 10,
                imageAttrib     : 'data-picture'
            };


            lightgallery.setOptions(options);

            expect(lightgallery.getOptions()).to.deep.equal(options);
        });

        it('can return single option', function() {
            var expectedAttrib = 'data-image';

            var result = lightgallery.option('imageAttrib');

            expect(result).to.equal(expectedAttrib);
        });
    });

});
