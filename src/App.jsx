import { createRoot } from 'react-dom/client'

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);
const math = (<h1>5 + 5 = {5+5}</h1>);

createRoot(document.getElementById('root')).render(
<div>
  myelement
  math
  </div>
)

