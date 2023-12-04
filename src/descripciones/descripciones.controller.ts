import {
    Controller, Get, Post, Body, Param, Put, Delete, Patch, } from '@nestjs/common';
    import { DescripcionesService } from './descripciones.service';
    @Controller('descripciones')
    export class DescripcionesController {
    constructor(private readonly descripcionesService: DescripcionesService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
    return this.descripcionesService.findOne(id);
    }
    @Get()
    findAll(): string {
    return this.descripcionesService.findAll();
    }
    @Post()
    create(@Body() createDescripcionesDto): string {
    return this.descripcionesService.create(createDescripcionesDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateDescripciones): string {
    
    return this.descripcionesService.update(id, updateDescripciones);
    }
    @Delete(':id')
    delete(@Param('id') id: number): string {
    return this.descripcionesService.delete(id);
    }
    }