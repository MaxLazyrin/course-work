var translit = require('../src/translitModule.js');
var countProcessor = require('../src/countProcessor.js');
var assert = require('../node_modules/chai/chai').assert;

describe("Тестируем translitModule", function() {
	
	let words = [{
		ru: "Привет!",
		en: "Privet!",
	},
	{
		ru: "Щука и Ем&^#34))(",
		en: "Schuka i Em&^#34))(",
	},
	{
		ru: "Привет! Я Max!",
		en: "Privet! Ja Max!",
    },
    {
        ru: "Поставьте автомат, пожалуйста :(",
        en: "Postav'te avtomat, pozhalujsta :(",
    }];
	
	words.forEach((item) => {
		it(`${item.ru} => ${item.en}`, function(){
			assert.equal(translit.translit(item.ru), item.en);
		});
	});
	
});

describe("Тестируем countProcessor на подсчет символов", () => {
    it("Тест пустой строки", () => {
      assert.equal(countProcessor.getSymbolsCount(""), 0);
    });
    it("Тест строки с 12 символами \"Hello world!\"", () => {
      assert.equal(countProcessor.getSymbolsCount("Hello world!"), 12);
    });
    it("Тест строки с 8 символами \"12345678\"", () => {
      assert.equal(countProcessor.getSymbolsCount("12345678"), 8);
    });
});

describe("Тестируем countProcessor на подсчет слов", () => {
    it("Тестируем строку с 1 словом \"dsgasdgahahasdhsadhdsh\"", () => {
      assert.equal(countProcessor.getParamsCount("dsgasdgahahasdhsadhdsh").w, 1);
    });
    it("Тестируем строку с 10 словами \"1 2 3 4 5 6 7 8 9 0\"", () => {
      assert.equal(countProcessor.getParamsCount("1 2 3 4 5 6 7 8 9 0").w, 10);
    });
    it("Тестируем строку с 2 словами \"Hello, world!\"", () => {
      assert.equal(countProcessor.getParamsCount("Hello, world!").w, 2);
    });
});

describe("Тестируем countProcessor на подсчет предложений", () => {
    it("Тестируем строку с одним предложением \"dsgasdgahahasdhsadhdsh\"", () => {
      assert.equal(countProcessor.getParamsCount("dsgasdgahahasdhsadhdsh").s, 1);
    });
    it("Тестируем строку с 4 предложениями \"Hello. I. Am. Nikitka.\"", () => {
      assert.equal(countProcessor.getParamsCount("Hello. I. Am. Nikitka.").s, 4);
    });
    it("Тестируем строку с 4 предложениями \"Hello, world! Please help! I need help! Leave me alone!\"", () => {
      assert.equal(countProcessor.getParamsCount("Hello, world! Please help! I need help! Leave me alone!").s, 4);
    });
});