import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Home() {
  return (
    <div className='flex flex-1 flex-col gap-3'>
      <Label htmlFor='edital'>Edital:</Label>
      <Textarea
        id='edital'
        placeholder='Cole o texto do seu edital aqui'
        className='leading-relaxed'
      />

      <Button className='cursor-pointer'>Processar</Button>

      <Label htmlFor='resultado'>Resultado:</Label>
      <Textarea id='resultado' readOnly className='leading-relaxed' />
    </div>
  )
}
