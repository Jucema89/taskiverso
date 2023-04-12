export interface menuOptions {
  id: string
  title: string
  icon: string
  visible: boolean
  active: boolean
  disabled: boolean
  showSub: boolean
  route?: string
  //class: string
  submenu: submenuOptions[]
}

export interface submenuOptions {
  id?: string | number
  anex_id: number
  name: string
  icon: string
  route?: string
  active: boolean
  showSubLinks?: boolean
  idMenuLinks?: string
  menuLinks?: menuLinks[]
}

export interface menuLinks {
  idMenuLinks?: string
  anex_id?: number
  name: string
  icon: string
  route?: string
  active: boolean
  showSubLinks?: boolean
  menuLinks?: menuLinks[]
}

//TODO: Para validar los ids de los anexos verificar que concuerden con el EP: https://api.dev.colduty.com/colduty/categoria_anexos

export const MENU: menuOptions[] = [
  {
    id: '0',
    title: 'Datos de Información',
    icon: 'menu_informacion',
    visible: false,
    active: false,
    disabled: false,
    showSub: false,
    submenu: [
      {
        anex_id: 0,
        name: `Información Contribuyente`,
        icon: 'informacion_declarante',
        route: '/infoContribuyente/info',
        active: true,
      },
      {
        anex_id: 0,
        name: 'Año Anterior',
        icon: 'calendar_check',
        route: '/infoContribuyente/anio_anterior',
        active: true,
      },
      {
        anex_id: 0,
        name: 'Balance',
        icon: 'balance',
        route: '/infoContribuyente/balance',
        active: true,
      }
    ],
  },
  {
    id: '1',
    title: 'Anexos Depuración',
    icon: 'anexos-depuracion',
    visible: false,
    active: false,
    disabled: false,
    showSub: false,
    submenu: [
      {
        anex_id: 1,
        name: 'Anticipo de Renta',
        icon: 'anticipo_renta',
        route: '/anx-depuracion/anticipo_renta',
        active: false,
      },
      {
        anex_id: 2,
        name: 'Autorretenciones',
        icon: 'autoretenciones',
        route: '/anx-depuracion/autorretenciones',
        active: false,
      },
      {
        anex_id: 3,
        name: 'Beneficio de Auditoria',
        icon: 'beneficio_auditoria',
        route: '/anx-info/auditoria',
        active: false,
      },
      {
        anex_id: 4,
        name: 'Compensación de Pérdidas',
        icon: 'compensacion_perdidas',
        route: '/anx-depuracion/compensacion_perdidas',
        active: false,
      },
      {
        anex_id: 5,
        name: '4 x Mil - GMF',
        icon: '4xmil',
        route: '/anx-depuracion/gmf',
        active: false,
      },
      {
        anex_id: 6,
        name: 'Descuentos Tributarios',
        icon: 'descuentos_tributarios',
        route: '/anx-depuracion/descuentos_tributarios',
        active: false,
      },
      {
        anex_id: 7,
        name: 'Detalle Gasto Exterior',
        icon: 'gastos_del exterior',
        route: '/anx-depuracion/gasto_exterior',
        active: false,
      },
      {
        anex_id: 8,
        name: 'Deterioro de Cartera ',
        icon: 'deterioro_cartera',
        route: '/anx-depuracion/deterioro_cartera',
        active: false,
      },
      {
        anex_id: 9,
        name: 'Diferencia en cambio',
        icon: 'diferencia_cambio',
        route: '/anx-depuracion/diferencia_cambio',
        active: false,
      },
      {
        anex_id: 10,
        name: 'Industria y Comercio\n Avisos y Tableros',
        icon: 'industria_comercio',
        route: '/anx-depuracion/industria_comercio',
        active: false,
      },
      {
        anex_id: 36,
        name: 'Interes presunto',
        icon: 'interes_presunto',
        route: '/anx-depuracion/interes_presunto',
        active: false,
      },
      {
        anex_id: 35,
        name: 'Iva en Bienes de Capital',
        icon: 'iva_bienes_capital',
        route: '/anx-depuracion/iva_bienes_capital',
        active: false,
      },
      {
        anex_id: 11,
        name: 'Nomina',
        icon: 'nomina',
        active: false,
        idMenuLinks: 'nomina',
        menuLinks: [
          {
            name: 'Datos informativos Renglones 33, 34 y 35',
            icon: 'pay',
            route: '/anx-depuracion/nomina/datos_informativos',
            active: false,
          },
          {
            name: 'Planillas Seguridad Social',
            icon: 'pay',
            route: '/anx-depuracion/nomina/planilla_seguridad_social',
            active: false,
          },
          {
            name: 'Datos Iniciales',
            icon: 'pay',
            route: '/anx-depuracion/nomina/datos_iniciales',
            active: false,
          },
          {
            name: 'Analisis Nomina',
            icon: 'pay',
            route: '/anx-depuracion/nomina/analisis_nomina',
            active: false,
          },
        ]
      },
      {
        anex_id: 12,
        name: 'Pagos en efectivo',
        icon: 'pago_efectivo',
        route: '/anx-depuracion/pago_efectivo',
        active: false,
      },
      {
        anex_id: 13,
        name: 'Retenciones en Renta',
        icon: 'retencion_renta',
        route: '/patrimonio/retefuente',
        active: false,
      },
      {
        anex_id: 14,
        name: 'Subcapitalización',
        icon: 'subcapitalizacion',
        route: '/anx-depuracion/sub_capitalizacion',
        active: false,
      }
    ],
  },
  {
    id: '2',
    title: 'Activos Fijos',
    icon: 'activos_fijos',
    visible: false,
    active: false,
    disabled: false,
    showSub: false,
    submenu: [
      {
        anex_id: 38,
        name: 'Activos Fijos',
        icon: 'activos_fijos_check',
        route: '/formato2516/activos-fijos',
        active: true,
      },
      {
        anex_id: 17,
        name: 'Venta de Activos Fijos',
        icon: 'activos_fijos_venta',
        route: '/formato2516/venta_activos_fijos',
        active: false,
      },
      {
        anex_id: 18,
        name: 'Venta de Acciones',
        icon: 'venta_acciones',
        route: '/formato2516/venta_acciones',
        active: false,
      },
      {
        anex_id: 39,
        name: 'Ganancias Ocasionales',
        icon: 'ganancia-ocasional',
        route: '/anx-depuracion/ganancia_ocasional',
        active: false,
      },
    ]
  },
  {
    id: '3',
    title: 'Ingresos',
    icon: 'ingresos_menu',
    visible: false,
    active: false,
    disabled: false,
    showSub: false,
    submenu: [
      {
        anex_id: 19,
        name: 'Ingresos no Constitutivos de\n Renta ni Ganancia Ocasional',
        icon: 'incgro',
        route: '/anex-dep/incrgo',
        active: false,
      },
      {
        anex_id: 20,
        name: 'Conciliación Ingresos',
        icon: 'conciliacion-ingresos',
        route: '/conciliacion/ingresos',
        active: false,
      },
      {
        anex_id: 21,
        name: 'Facturacion Electronica',
        icon: 'facturacion-electronica',
        active: false,
        idMenuLinks: 'facturacion',
        menuLinks: [
          {
            name: 'Doc Electrónicos Ingresos',
            icon: 'electronicos-ingreso',
            route: '/conciliacion/electronicos_ingresos',
            active: false,
          },
          {
            name: 'Doc Electrónicos\nCostos y Gastos',
            icon: 'electronicos-gastos',
            route: '/conciliacion/electronicos_costos_gastos',
            active: false,
          }
        ]
      },
      {
        anex_id: 37,
        name: 'Ingresos por Dividendos',
        icon: 'ingresos-dividendos',
        route: '/conciliacion/ingresos-dividendos',
        active: false,
      },
      //Documentos Electronicos Ingresos
      //Documentos Electronicos Costos y Gastos
    ]
  },
  {
    id: '4',
    title: 'Rentas Especiales',
    icon: 'renta-especial',
    visible: false,
    active: false,
    disabled: false,
    showSub: false,
    submenu: [
      // {
      //   anex_id: 22,
      //   name: 'Ajustes Fiscales',
      //   icon: 'ajustes_fiscales',
      //   route: '/renta/fiscal',
      //   active: false,
      // },
      {
        anex_id: 23,
        name: 'Rentas Especiales',
        icon: 'renta-especial',
        route: '/renta/gravable',
        active: false,
      },
      {
        anex_id: 24,
        name: 'Renta Exenta',
        icon: 'renta-exenta',
        route: '/anex-dep/renta',
        active: false,
      },
      {
        anex_id: 40,
        name: 'Renta Pasiva - ECE',
        icon: 'renta-exenta',
        route: '/anex-dep/pasiva',
        active: false,
      },
    ],
  },
  {
    id: '5',
    title: 'Patrimonio',
    icon: 'patrimonio',
    visible: false,
    active: false,
    disabled: false,
    showSub: false,
    submenu: [
      {
        anex_id: 25,
        name: 'Conciliación Patrimonio',
        icon: 'conciliacion-patrimonial',
        route: '/conciliacion/patrimonio',
        active: false,
      },
      {
        anex_id: 26,
        name: 'Comparación Patrimonial',
        icon: 'comparacion-patrimonial',
        route: '/conciliacion/comp-patrimonial',
        active: false,
      }
    ],
  },
  {
    id: '6',
    title: 'Sanciones',
    icon: 'sanciones',
    visible: false,
    active: false,
    disabled: false,
    showSub: false,
    submenu: [
      {
        anex_id: 27,
        name: 'Extemporaneidad',
        icon: 'extemporaneidad',
        route: '/sanciones/extemporanea',
        active: false,
      },
      {
        anex_id: 28,
        name: 'Corrección',
        icon: 'correccion',
        route: '/sanciones/correccion',
        active: false,
      }]
  },
  {
    id: '7',
    title: 'Renta',
    icon: 'renta-normal',
    visible: false,
    active: false,
    disabled: false,
    showSub: false,
    submenu: [
      {
        anex_id: 22,
        name: 'Ajustes Fiscales',
        icon: 'ajustes_fiscales',
        route: '/renta/fiscal',
        active: false,
      },
      {
        anex_id: 29,
        name: 'Provisión Impuesto a la Renta',
        icon: 'provision-renta',
        route: '/anx-info/provision',
        active: false,
      },
      {
        anex_id: 30,
        name: 'Formulario 110',
        icon: 'form-110',
        route: '/f110',
        active: false,
      },
      {
        anex_id: 31,
        name: 'Renta Presuntiva',
        icon: 'renta-presuntiva',
        route: '/conciliacion/renta_presuntiva',
        active: false,
      },
      {
        anex_id: 32,
        name: 'Conciliación Renta',
        icon: 'conciliacion-renta',
        route: '/conciliacion/renta',
        active: false,
      },
    ],
  },
  {
    id: '8',
    title: 'Formulario 2516',
    icon: 'formulario2516',
    visible: false,
    active: false,
    disabled: false,
    showSub: false,
    submenu: [
      {
        anex_id: 33,
        name: 'Caratula 2516',
        icon: '2516',
        route: '/infoContribuyente/caratula',
        active: true,
      },
      {
        anex_id: 34,
        name: 'Formulario 2516',
        icon: 'formulario110',
        route: '/formato2516/completo',
        active: false,
      },
    ],
  }
];

export const URLS_LOCKED = [
  {
    name: 'perfil',
    url: 'settings/profile'
  },
  {
    name: 'users',
    url: 'settings/manage_users'
  },
  {
    name: 'plans',
    url: 'plans/'
  }
]
