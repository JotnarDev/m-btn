import MBtn from './components/MBtn.vue';
import './styles/buttons.css';

// Exportar el componente individualmente
export { MBtn };

// Exportar como plugin para instalación global
export default {
  install: (app) => {
    app.component('m-btn', MBtn);
  },
};