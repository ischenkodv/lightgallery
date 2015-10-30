var expect = chai.expect;
var assert = chai.assert;

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

    describe('Galleries management', function() {

        it('can create new gallery', function() {

            var images = [
                {
                    src: '/path/to/image1.png'
                },
                {
                    src: '/path/to/image2.png'
                }
            ];

            var options = {
                showOverlay  : false,
                overlayColor : '#555'
            };

            lightgallery.createGallery('gallery name', images, options);

        });
    });

    describe('Picture loading', function() {

        it('can load image using picture element', function(done) {
            var src = 'tests/images/320px-opera_by_night.jpg';
            var expectedWidth = 320;
            var expectedHeight = 100;

            var success = function(imgSrc, width, height) {
                expect(imgSrc).to.contain(src);
                expect(width).to.equal(expectedWidth);
                expect(height).to.equal(expectedHeight);
                done();
            }

            var error = function() {
                assert.fail(new Error('my message'));
                done();
            }

            lightgallery.loadPicture({
                src: src
            }, success, error);

        });

        it('calls error callback if image failed to load', function(done) {
            var src = 'i-do-no-exists.jpg';

            var success = function(imgSrc, width, height) {
                assert.fail(new Error('my message'));
                done();
            }

            var error = function(imgSrc) {
                expect(true).to.be.true;
                done();
            }

            lightgallery.loadPicture({
                src: src
            }, success, error);
        });

    });
});
