import baseEditForm from '../_classes/base/Base.form';

import CheckboxEditDisplay from './editForm/Checkbox.edit.display';

export default function(...extend) {
  return baseEditForm(...extend, [
    {
      key: 'display',
      components: CheckboxEditDisplay
    }
  ]);
}
