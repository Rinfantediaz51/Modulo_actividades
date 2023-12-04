import {
    Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
    import { ActividadesService } from './actividades.service';
    
    @Controller('actividades')
    export class ActividadesController {
    constructor(private readonly actividadesService: ActividadesService) {}
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<{}> {
    return this.actividadesService.findOne(id);
    }

    @Get()
    findAll(): Promise<{}> {
    return this.actividadesService.findAll();
    }

    @Post()
    create(@Body() createActividadesDto): Promise<{}> {
    return this.actividadesService.create(createActividadesDto);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateActividades): Promise<{}> {
        return this.actividadesService.update(id, updateActividades);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<{}> {
    return this.actividadesService.delete(id);
    }
    }
    
