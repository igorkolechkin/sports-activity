import React from 'react';
import UsersNav from '@components/PageMessage/UsersNav';

const PageMessage = props => {
  const users = [
    {id: 0, name: 'Andrey', selected: true},
    {id: 2, name: 'Nazar', selected: false},
    {id: 2, name: 'Oleg', selected: false}
  ]

  return (
    <>
      <h1 className='page-title'>{ props.pageTitle }</h1>

      <UsersNav users={ users } />
    </>
  )
}

export default PageMessage;