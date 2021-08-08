import "./permissionTable.scss";
import { useState, useEffect } from 'react';
//import { List } from '../../data/list'
//import Checkbox from '../../components/Checkbox';


export function PermissionTable() {

  // cria os objetos
  const [permissionState, setPermissions] = useState([]);

  useEffect(() => {
    let permissionState = [
      {
        id: 1, name: "Todos", class: "title", background: "first",
      },
      {
        id: 2, name: "Analise", class: "title", background: "second", hierarchy: 'analise'
      },
      {
        id: 3, name: "Analise de contas", hierarchy: 'analise',
      },
      {
        id: 4, name: "Analise de transações", hierarchy: 'analise'
      },
      {
        id: 5, name: "Contas", class: "title", background: "second", hierarchy: 'conta',
      },
      {
        id: 6, name: "Cliente", hierarchy: 'conta',
      },
      {
        id: 7, name: "Transações", hierarchy: 'conta',
      },
      {
        id: 8, name: "Contas digitais", hierarchy: 'conta',
      },
      {
        id: 9, name: "Customização", class: "title", background: "second", hierarchy: 'customizacao',
      },
      {
        id: 10, name: "Limites e horários", hierarchy: 'customizacao',
      },
      {
        id: 11, name: "Tarifas", hierarchy: 'customizacao',
      },
      {
        id: 12, name: "Tarifas personalizadas", hierarchy: 'customizacao',
      },
      {
        id: 13, name: "Conta", hierarchy: 'customizacao',
      },
      {
        id: 14, name: "Financeiro", class: "title", background: "second", hierarchy: 'financeiro',
      },
      {
        id: 15, name: "Entradas", hierarchy: 'financeiro',
      }
    ];

    setPermissions(
      permissionState.map(d => {
        return {
          id: d.id,
          name: d.name,
          select: [false, false, false, false, false],
          hierarchy: d.hierarchy,
          class: d.class,
          background: d.background,
        };
      })
    );
  }, []);


  // cadastrar
  function HandleSaveChecks() {
    const permission = permissionState.filter((item) => item.select.some(e => e !== false))
    console.log(permission)
  }
  return (
    <div className="container">
      <h1>Tabela de Permissões</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Ver listagem</th>
            <th>Ver detalhes</th>
            <th>Criar</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {permissionState.map((d, x) =>
            <tr className={d.background} key={d.id}>
              <th className={d.class}>{d.name}</th>

              {d.select.map((s, y) =>
                <td key={y}>
                  <input
                    type="checkbox"
                    checked={d.select[y]}
                    onChange={event => {
                      let checked = event.target.checked;
                      setPermissions(
                        permissionState.map((data, i) => {
                          let checkgroup;
                          // fazendo os subcheck serem preenchidos
                          if (d.name === "Todos") {
                            data.select[y] = checked;
                          }
                          else if (d.name === "Analise") {
                            checkgroup = permissionState.filter((item) => item.hierarchy === 'analise')
                            checkgroup.map((checks, c) => checks.select[y] = checked)
                          }
                          if (d.name === "Contas") {
                            checkgroup = permissionState.filter((item) => item.hierarchy === 'conta')
                            checkgroup.map((checks, c) => checks.select[y] = checked)
                          }
                          if (d.name === "Customização") {
                            checkgroup = permissionState.filter((item) => item.hierarchy === 'customizacao')
                            checkgroup.map((checks, c) => checks.select[y] = checked)
                          }
                          if (d.name === "Financeiro") {
                            checkgroup = permissionState.filter((item) => item.hierarchy === 'financeiro')
                            checkgroup.map((checks, c) => checks.select[y] = checked)
                          }
                          if (d.id === data.id) {
                            data.select[y] = checked;
                          }
                          return data;
                        })
                      );
                    }}
                    value={d.value && 'permission' + y + 1}
                    name='permission1' />
                </td>
              )}

            </tr>
          )}
        </tbody>
      </table>
      <div className="btn">
        <button onClick={() => HandleSaveChecks()}>Cadastrar</button>
      </div>
    </div >
  )
}


