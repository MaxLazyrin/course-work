"use strict";

let map = new Map();
//lowerCase
map.set("а", "a");
map.set("б", "b");
map.set("в", "v");
map.set("г", "g");
map.set("д", "d");
map.set("е", "e");
map.set("ё", "yo");
map.set("ж", "zh");
map.set("з", "z");
map.set("и", "i");
map.set("й", "j");
map.set("к", "k");
map.set("л", "l");
map.set("м", "m");
map.set("н", "n");
map.set("о", "o");
map.set("п", "p");
map.set("р", "r");
map.set("с", "s");
map.set("т", "t");
map.set("у", "u");
map.set("ф", "f");
map.set("х", "h");
map.set("ц", "ts");
map.set("ч", "tc");
map.set("ш", "sh");
map.set("щ", "sch");
map.set("ь", "'");
map.set("ы", "y");
map.set("ъ", "'");
map.set("э", "e");
map.set("ю", "ju");
map.set("я", "ja");
//upperCase
map.set("А", "A");
map.set("Б", "B");
map.set("В", "V");
map.set("Г", "G");
map.set("Д", "D");
map.set("Е", "E");
map.set("Ё", "Yo");
map.set("Ж", "Zh");
map.set("З", "Z");
map.set("И", "I");
map.set("Й", "J");
map.set("К", "K");
map.set("Л", "L");
map.set("М", "M");
map.set("Н", "N");
map.set("О", "O");
map.set("П", "P");
map.set("Р", "R");
map.set("С", "S");
map.set("Т", "T");
map.set("У", "U");
map.set("Ф", "F");
map.set("Х", "H");
map.set("Ц", "Ts");
map.set("Ч", "Tc");
map.set("Ш", "Sh");
map.set("Щ", "Sch");
map.set("Ы", "Y");
map.set("Э", "E");
map.set("Ю", "Ju");
map.set("Я", "Ja");

module.exports = {
    translit: function translit(word)
	{
		let answer = "";
		let tmp = "";
		for(let ch of word)
		{
			tmp = map.get(ch);
			if(tmp === undefined)
				answer += ch;
			else
				answer += tmp;
		}
		return answer;
	},

    translitWithStats: function translitWithStats(word)
	{
		let retMap = new Map();
		let answer = "";
		let tmp = "";
		let num = 0;
		for(let ch of word)
		{
			tmp = map.get(ch);
			if(tmp === undefined) 
			{
				answer += ch;
				if(retMap.has(ch))
				{
					num = retMap.get(ch);
					retMap.set(ch, ++num);
				}
				else
				{
					retMap.set(ch, 1);
				}
			}
			else
			{
				answer += tmp;
				if(retMap.has(tmp))
				{
					num = retMap.get(tmp);
					retMap.set(tmp, ++num);
				}
				else
				{
					retMap.set(tmp, 1);
				}
			}
		}
		return {answer, retMap};
	},
};