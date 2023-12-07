import { getInfo } from '@el3um4s/svelte-get-component-info';
import fs from 'fs';

const blocs = [
    {
        id: 'button',
        title: 'Button',
        component: 'src/lib/components/Button/Button.svelte',
        componentDemo: 'src/routes/components/demos/Button.demo.svelte',
    },
    // {
    //     id: 'input',
    //     title: 'Input',
    //     component: 'src/lib/components/Input/Input.svelte',
    //     componentDemo: 'src/routes/components/demos/Input.demo.svelte',
    // },
    // {
    //     id: 'input-number',
    //     title: 'Input number',
    //     component: 'src/lib/components/InputNumber/InputNumber.svelte',
    //     componentDemo: 'src/routes/components/demos/InputNumber.demo.svelte',
    // },
    // {
    //     id: 'input-range',
    //     title: 'Input range',
    //     component: 'src/lib/components/Button/Button.svelte',
    //     componentDemo: 'src/routes/components/demos/InputRange.demo.svelte',
    // },
    // {
    //     id: 'textarea',
    //     title: 'Textarea',
    //     component: 'src/lib/components/Textarea/Textarea.svelte',
    //     componentDemo: 'src/routes/components/demos/Textarea.demo.svelte',
    // },
    // {
    //     id: 'select',
    //     title: 'Select',
    //     component: 'src/lib/components/Select/Select.svelte',
    //     componentDemo: 'src/routes/components/demos/Select.demo.svelte',
    // },
    // {
    //     id: 'radio-button',
    //     title: 'Radio button',
    //     component: 'src/lib/components/RadioButton/RadioButton.svelte',
    //     componentDemo: 'src/routes/components/demos/RadioButton.demo.svelte',
    // },
    // {
    //     id: 'checkbox',
    //     title: 'Checkbox',
    //     component: 'src/lib/components/Checkbox/Checkbox.svelte',
    //     componentDemo: 'src/routes/components/demos/CheckBox.demo.svelte',
    // },
    // {
    //     id: 'switch',
    //     title: 'Switch',
    //     component: 'src/lib/components/Switch/Switch.svelte',
    //     componentDemo: 'src/routes/components/demos/Switch.demo.svelte',
    // }
]

blocs.forEach(bloc => {
    const info = getInfo(bloc.component);
    console.log(info);
    console.log(bloc);
    bloc.info = info;
});

fs.writeFileSync('./generated.json', JSON.stringify(blocs), { encoding: 'utf-8' })
