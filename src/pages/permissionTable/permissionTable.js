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
        id: 5, name: "Contas", class: "title", background: "second",
      },
      {
        id: 6, name: "Cliente",
      },
      {
        id: 7, name: "Transações",
      },
      {
        id: 8, name: "Contas digitais",
      },
      {
        id: 9, name: "Customização", class: "title", background: "second",
      },
      {
        id: 10, name: "Limites e horários",
      },
      {
        id: 11, name: "Tarifas",
      },
      {
        id: 12, name: "Tarifas personalizadas",
      },
      {
        id: 13, name: "Conta",
      },
      {
        id: 14, name: "Financeiro", class: "title", background: "second",
      },
      {
        id: 15, name: "Entradas",
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
                          if (d.name === "Todos") {
                            data.select[y] = checked;

                          }
                          if (d.name === "Analise") {
                            for (let i = data.id; i < 5; i++) {
                              data.select[y] = checked;
                            }
                          }
                          else if (d.id === data.id) {
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
