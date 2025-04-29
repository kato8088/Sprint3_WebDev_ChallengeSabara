import React from 'react'
import { AdminContainer } from '../styles/AdminStyled';

const Admin = () => {
  return (
    <AdminContainer>
      <div>
        <h1>Painel de Administração</h1>
        <button>Resetar para Valores Padrão</button>
        <button>Opcao 2</button>
        <button>Opcao 3</button>
      </div>
      <div style={{marginTop: '50px'}}>
        <span><h2>Taxa de atualização: </h2><p>10 segundos</p></span>
      </div>
    </AdminContainer>
  );
}

export default Admin
