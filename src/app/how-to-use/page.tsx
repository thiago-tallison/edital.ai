export default function HowToUse() {
  return (
    <div>
      <h1 className='mb-6 text-2xl'>Como usar</h1>

      <ol className='list-inside space-y-6'>
        <li className='list-decimal'>
          Copie todas as disciplinas para o cargo desejado e cole-as no campo{' '}
          <strong>Disciplinas do Edital</strong>
          <ul>
            <li className='ml-6 mt-2'>
              <strong>Obs:</strong> caso a seleção inclua o número da página do
              documento, considere excluí-la antes de processar o texto.
            </li>
          </ul>
        </li>

        <li className='list-decimal'>
          Configurações
          <ul>
            <li className='ml-6 mt-2'>
              <strong>Sem numeração:</strong> marque esta caixa caso não deseje
              numeração em cada tópico.
            </li>
            <li className='ml-6 mt-2'>
              <strong>Espaçamento:</strong> a quantidade de espaços para recuar
              os subtópicos.
            </li>
          </ul>
        </li>
        <li className='list-decimal'>Clique em processar</li>
        <li className='list-decimal'>
          Clique no botão copiar - canto superior direito - do campo{' '}
          <strong>Resultado</strong>
        </li>
      </ol>
    </div>
  )
}
