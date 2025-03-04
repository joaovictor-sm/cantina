import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Link from 'next/link'
import cantinaLogo from '../assets/cantinaLogo.svg'
import sloganMenu from '../assets/sloganMenu.svg'
import lanche from '../public/lanche.png'

export default function Home() {
  return (
    <div className="space-y-7">
      <div className="bg-red-800 w-full rounded-b-4xl h-48">
        <div className="flex flex-col justify-center items-center py-3.5">
          <Image src={cantinaLogo} alt="Cantina Logo" width={96} height={96} />
          <Image src={sloganMenu} alt="Slogan Menu" width={322} height={68} />
        </div>
      </div>

      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 p-4 pt-0">
          <Button size="sm" variant={'default'} className="rounded-full">
            Lanches
          </Button>
          <Button size="sm" variant={'secondary'} className="rounded-full">
            sobremesa
          </Button>
          <Button size="sm" variant={'secondary'} className="rounded-full">
            Bebidas
          </Button>
          <Button size="sm" variant={'secondary'} className="rounded-full">
            Bebidas
          </Button>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="px-3.5 space-y-3">
        <h3 className="font-semibold text-lg ml-5 ">Lanches</h3>

        <Link
          href={'/'}
          className="flex px-5 py-3 bg-white rounded-2xl items-center justify-between border-b"
        >
          {/* ESQUERDA */}
          <div className=" flex flex-col">
            <h3 className="text-sm font-medium pb-0.5">
              McOferta Média Big Mac Duplo
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              Quatro hambúrgueres (100% carne bovina), alface americana...
            </p>
            <span className="pt-3 text-sm font-semibold">R$ 39,90</span>
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={lanche}
              alt={'Imagem do produto'}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>

        <Link
          href={'/'}
          className="flex px-5 py-3 bg-white rounded-2xl items-center justify-between border-b"
        >
          {/* ESQUERDA */}
          <div className=" flex flex-col">
            <h3 className="text-sm font-medium pb-0.5">
              McOferta Média Big Mac Duplo
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              Quatro hambúrgueres (100% carne bovina), alface americana...
            </p>
            <span className="pt-3 text-sm font-semibold">R$ 39,90</span>
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={lanche}
              alt={'Imagem do produto'}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>

        <Link
          href={'/'}
          className="flex px-5 py-3 bg-white rounded-2xl items-center justify-between border-b"
        >
          {/* ESQUERDA */}
          <div className=" flex flex-col">
            <h3 className="text-sm font-medium pb-0.5">
              McOferta Média Big Mac Duplo
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              Quatro hambúrgueres (100% carne bovina), alface americana...
            </p>
            <span className="pt-3 text-sm font-semibold">R$ 39,90</span>
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={lanche}
              alt={'Imagem do produto'}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>

        <Link
          href={'/'}
          className="flex px-5 py-3 bg-white rounded-2xl items-center justify-between border-b"
        >
          {/* ESQUERDA */}
          <div className=" flex flex-col">
            <h3 className="text-sm font-medium pb-0.5">
              McOferta Média Big Mac Duplo
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              Quatro hambúrgueres (100% carne bovina), alface americana...
            </p>
            <span className="pt-3 text-sm font-semibold">R$ 39,90</span>
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={lanche}
              alt={'Imagem do produto'}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>

        <Link
          href={'/'}
          className="flex px-5 py-3 bg-white rounded-2xl items-center justify-between border-b"
        >
          {/* ESQUERDA */}
          <div className=" flex flex-col">
            <h3 className="text-sm font-medium pb-0.5">
              McOferta Média Big Mac Duplo
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              Quatro hambúrgueres (100% carne bovina), alface americana...
            </p>
            <span className="pt-3 text-sm font-semibold">R$ 39,90</span>
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={lanche}
              alt={'Imagem do produto'}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>

        <Link
          href={'/'}
          className="flex px-5 py-3 bg-white rounded-2xl items-center justify-between border-b"
        >
          {/* ESQUERDA */}
          <div className=" flex flex-col">
            <h3 className="text-sm font-medium pb-0.5">
              McOferta Média Big Mac Duplo
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              Quatro hambúrgueres (100% carne bovina), alface americana...
            </p>
            <span className="pt-3 text-sm font-semibold">R$ 39,90</span>
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={lanche}
              alt={'Imagem do produto'}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>

        <Link
          href={'/'}
          className="flex px-5 py-3 bg-white rounded-2xl items-center justify-between border-b"
        >
          {/* ESQUERDA */}
          <div className=" flex flex-col">
            <h3 className="text-sm font-medium pb-0.5">
              McOferta Média Big Mac Duplo
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              Quatro hambúrgueres (100% carne bovina), alface americana...
            </p>
            <span className="pt-3 text-sm font-semibold">R$ 39,90</span>
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={lanche}
              alt={'Imagem do produto'}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>

        <Link
          href={'/'}
          className="flex px-5 py-3 bg-white rounded-2xl items-center justify-between border-b"
        >
          {/* ESQUERDA */}
          <div className=" flex flex-col">
            <h3 className="text-sm font-medium pb-0.5">
              McOferta Média Big Mac Duplo
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              Quatro hambúrgueres (100% carne bovina), alface americana...
            </p>
            <span className="pt-3 text-sm font-semibold">R$ 39,90</span>
          </div>

          {/* DIREITA */}
          <div className="relative min-h-[82px] min-w-[120px]">
            <Image
              src={lanche}
              alt={'Imagem do produto'}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
