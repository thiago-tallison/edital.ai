export default function HowToUse() {
  return (
    <>
      <h1 className='text-2xl'>Como usar</h1>

      <ol>
        <li>
          Copie todas as disciplinas para o cargo desejado do edital e cole-as
          no campo <strong>DISCIPLINAS DO EDITAL</strong>;
          <ul>
            <li>
              Obs: caso a seleção inclua o número da página do documento,
              considere excluí-la antes de processar o texto. Este comportamento
              é comum em documentos do tipo PDF.
            </li>
          </ul>
        </li>

        <li>
          Configurações;
          <ul>
            <li>
              <strong>Sem numeração:</strong> marque esta caixa se não deseja
              numeração em cada tópico.
            </li>
            <li>
              <strong>Espaçamento:</strong> a quantidade de espaços para identar
              os subtópicos.
            </li>
          </ul>
        </li>
        <li>Clique em processar;</li>
        <li>
          Clique no botão copiar - canto superior direito - do campo{' '}
          <strong>RESULTADO</strong>;
        </li>
      </ol>
    </>
  )
}
