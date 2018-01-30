

   
describe('Test wrong outcode', function () {
        let result = null;
        beforeEach(function (done) {
            add().then((res) => {
                done();
            }).catch(error => {
                result = error.message
                done();
            });
        });
        it(`Return No outcode found`, function () {
            expect(result).toEqual('No outcode found');
        });
    });
