import {provide} from 'vue';

const fontColorSymbol = Symbol();

provide(fontColorSymbol, 'tomato');

export default fontColorSymbol;
