var create = require('../create');

describe('options', function () {
  it('can set an option that is inerhited by components', function(){
    var browser = create();
    var parentComponent = browser.find('div').component({});
    parentComponent.set({myOption: 'abc'});
    var childComponent = parentComponent.find('div').component({});
    expect(childComponent.get('myOption')).to.equal('abc');
  });

  it('can overide default timeout', function(){
    var browser = create();
    browser.set({timeout: 10});
    var start = new Date();

    return browser.find('.doesnt-exist').shouldExist().catch(function(){
      var end = new Date();
      var duration = end - start;
      expect(duration).to.be.below(50);
    });
  });
});
