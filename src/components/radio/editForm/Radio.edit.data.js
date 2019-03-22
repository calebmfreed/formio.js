import BuilderUtils from '../../../utils/builder';

export default [
  {
    type: 'datagrid',
    input: true,
    label: 'Values',
    key: 'values',
    tooltip: 'The radio button values that can be picked for this field. Values are text submitted with the form data. Labels are text that appears next to the radio buttons on the form.',
    weight: 10,
    defaultValue: [{ label: '', value: '' }],
    components: [
      {
        label: 'Label',
        key: 'label',
        input: true,
        type: 'textfield'
      },
      {
        label: 'Value',
        key: 'value',
        input: true,
        type: 'textfield',
        calculateValue: { _camelCase: [{ var: 'row.label' }] }
      },
      {
        type: 'select',
        input: true,
        weight: 180,
        label: 'Shortcut',
        key: 'shortcut',
        tooltip: 'The shortcut key for this option.',
        dataSrc: 'custom',
        data: {
          custom(values, component, data, row, utils, instance, form) {
            return BuilderUtils.getAvailableShortcuts(form, component);
          }
        }
      }
    ]
  },
];
