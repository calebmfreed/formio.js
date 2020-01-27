import Evaluator from '../../../utils/Evaluator';

export default [
  {
    type: 'checkbox',
    input: true,
    key: 'enableDate',
    label: 'Enable Date Input',
    weight: 0,
    tooltip: 'Enables date input for this field.'
  },
  {
    type: 'textfield',
    input: true,
    key: 'datePicker.minDate',
    label: 'Minimum Date',
    placeholder: 'yyyy-MM-dd',
    tooltip: 'The minimum date that can be picked. You can also use Moment.js functions. For example: \n \n moment().subtract(10, \'days\')',
    weight: 10
  },
  {
    type: 'textfield',
    input: true,
    key: 'datePicker.maxDate',
    label: 'Maximum Date',
    placeholder: 'yyyy-MM-dd',
    tooltip: 'The maximum date that can be picked. You can also use Moment.js functions. For example: \n \n moment().add(10, \'days\')',
    weight: 20
  },
  {
    type: 'tags',
    input: true,
    key: 'datePicker.disable',
    label: 'Disable specific dates or dates by range',
    placeholder: '(yyyy-MM-dd) or (yyyy-MM-dd - yyyy-MM-dd)',
    tooltip: 'Add dates that you want to blacklist. For example: \n \n 2025-02-21',
    weight: 21
  },
  {
    type: 'panel',
    title: 'JavaScript',
    collapsible: true,
    collapsed: false,
    style: { 'margin-bottom': '10px' },
    key: 'panel-disable-function',
    customConditional() {
      return !Evaluator.noeval;
    },
    components: [
      {
        type: 'htmlelement',
        tag: 'div',
        content:
          '<table class="table table-bordered table-condensed table-striped">' +
          '<tr><th>date</th><td>The main object.</td></tr>' +
          '<tr><th>getDay()</th><td>Returns the number of the day starting from sundays</td></tr>' +
          '<tr><th>getMonth()</th><td>Returns the number of the month starting from january</td></tr>' +
          '<tr><th>_</th><td>For more information check out the <a href="https://flatpickr.js.org/examples/#disabling-dates" target="_blank">Docs</a>.</td></tr>' +
          '</table><br/>'
      },
      {
        type: 'textarea',
        input: true,
        editor: 'ace',
        key: 'datePicker.disableFunction',
        label: 'Disabling dates by a function',
        weight: 22
      },
      {
        type: 'htmlelement',
        tag: 'div',
        content: '<p>Enter custom javascript code.</p>' +
          '<h4>Example</h4>' +
          `<pre>function(date) {<br>  // return true to disable<br>  return (date.getDay() === 0 || date.getDay() === 6); <br>}
           </pre>
          `
      }
    ]
  },
  {
    type: 'checkbox',
    input: true,
    key: 'datePicker.disableWeekends',
    label: 'Disabling weekends',
    tooltip: 'Check to disable weekends',
    weight: 23
  }
];
