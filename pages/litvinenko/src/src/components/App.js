import React from 'react';
import '../styles/App.css';
import ColorPickerView from './ColorPickerView';

/**
 * Главный компонент.
 */
class App extends React.Component {

    /**
     * Конструктор класса `App`.
     * @param props объект со свойствами.
     */
    constructor(props) {
        super(props);
        this.state = {
            redChannel: 0,
            greenChannel: 0,
            blueChannel: 0
        };
    }

    /**
     * Коллбэк, информирующий о получении нового цвета.
     * @param {Number} red красный канал, число в промежутке 0-255.
     * @param {Number} green зеленый канал, число в промежутке 0-255.
     * @param {Number} blue синий канал, число в промежутке 0-255.
     */
    onColorChanged(red, green, blue) {
        this.setState({
            redChannel: red,
            greenChannel: green,
            blueChannel: blue
        });
    }

    /**
     * Для переданного значения цветового канала возвращает уменьшенное на заданное число процентов значение канала.
     * @param {Number} colorChannel уровень канала цвета, число в промежутке 0-255.
     * @param {Number} darkerPercent процент затемнения, число в промежутке 0-100.
     */
    getDarkerChannel(colorChannel, darkerPercent) {
        return Math.round((colorChannel * (100 - darkerPercent) / 100)).toString(16).padStart(2, '0');
    }

    /**
     * Для переданных цветовых каналов и процента затемнения формирует и возвращает затемненный цвет в формате #rrggbb.
     * @param {Number} red красный канал, число в промежутке 0-255.
     * @param {Number} green зеленый канал, число в промежутке 0-255.
     * @param {Number} blue синий канал, число в промежутке 0-255.
     * @param {Number} darkerPercent процент затемнения, число в промежутке 0-100.
     */
    getDarkerColor(red, green, blue, darkerPercent) {
        let redChannel = this.getDarkerChannel(red, darkerPercent);
        let greenChannel = this.getDarkerChannel(green, darkerPercent);
        let blueChannel = this.getDarkerChannel(blue, darkerPercent);
        let color = "#" + redChannel + greenChannel + blueChannel;
        return color;
    }

    /**
     * Отрисовывает компонент.
     */
    render() {
        let red = this.state.redChannel;
        let green = this.state.greenChannel;
        let blue = this.state.blueChannel;
        let darkerBackground = this.getDarkerColor(red, green, blue, 20);
        return (
            <div className="App" style={{ backgroundColor: darkerBackground }}>
                <header className="App-header">
                    <p>Технологии разработки ПО</p>
                    <p>Вариант 11</p>
                    <ColorPickerView onNewColor={(red, green, blue) => this.onColorChanged(red, green, blue)} />
                    <p id="text_red">Красный - {red}</p>
                    <p id="text_green">Зеленый - {green}</p>
                    <p id="text_blue">Синий - {blue}</p>
                </header>
            </div>
        );
    }
}






export default App;
