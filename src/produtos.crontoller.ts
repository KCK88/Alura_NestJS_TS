import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";

@Controller("produtos")
export class ProdutosController{
  
  @Get()
  obterTodos(): string {
    return "Lista todos os produtos"
  }

  @Get(":id")
  obterUm(@Param() params): string {
    return `Retorna os dados do produto ${params.id}`
  }

  @Post()
  criar(@Body() produto): string {
    return "Produto criado"
  }

  @Put()
  alterar():string {
    return "Produto atualizado"
  }
}