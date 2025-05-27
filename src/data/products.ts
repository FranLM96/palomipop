export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  imagenUrl: string;
  precio: string;
  categorias: string[];
  slug: string;
  tamaños: {
    nombre: string;
    precio: string;
  }[];
  ingredientes?: string[];
}

// Función para generar slug desde un texto
const generarSlug = (nombre: string): string => {
  return nombre
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

// Define a new interface for a product size item
export interface ProductSize {
  id: string; // Unique ID for the size (e.g., product_id-size_name)
  productId: number; // Original product ID
  nombre: string; // Combined name (e.g., "Palomitas Clásicas con Mantequilla (Mediano)")
  descripcion: string;
  imagenUrl: string;
  precio: string; // Price for this specific size
  categorias: string[];
  slug: string; // Combined slug (e.g., "palomitas-clasicas-con-mantequilla-mediano")
  originalSlug: string; // Original product slug
  sizeName: string; // Name of the size (e.g., "Mediano")
}

// Function to flatten products by their sizes
export const flattenProductsBySizes = (productos: Producto[]): ProductSize[] => {
  const flattened: ProductSize[] = [];

  productos.forEach(product => {
    // If a product has sizes, create a card for each size
    if (product.tamaños && product.tamaños.length > 0) {
      product.tamaños.forEach(size => {
        flattened.push({
          id: `${product.id}-${generarSlug(size.nombre)}`, // Unique ID
          productId: product.id,
          nombre: `${product.nombre} (${size.nombre})`, // Combine product name and size name
          descripcion: product.descripcion,
          imagenUrl: product.imagenUrl,
          precio: size.precio, // Use the size's price
          categorias: product.categorias,
          slug: `${product.slug}-${generarSlug(size.nombre)}`, // Combine product slug and size slug
          originalSlug: product.slug, // Keep the original product slug for navigation
          sizeName: size.nombre, // Store the size name
        });
      });
    } else {
      // If a product has no sizes (like drinks or snacks), create a single card for it
       flattened.push({
          id: `${product.id}-single`, // Unique ID
          productId: product.id,
          nombre: product.nombre,
          descripcion: product.descripcion,
          imagenUrl: product.imagenUrl,
          precio: product.precio,
          categorias: product.categorias,
          slug: product.slug,
          originalSlug: product.slug,
          sizeName: 'Único', // Indicate it's a single size/item
        });
    }
  });

  return flattened;
};


export const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Palomitas Clásicas con Mantequilla',
    descripcion: 'Nuestra clásica palomita con mantequilla, irresistible y tradicional.',
    imagenUrl: '/images/palomitas/mantequilla.svg',
    precio: '$79',
    categorias: ['salado', 'mantequilla'],
    slug: generarSlug('Palomitas Clásicas con Mantequilla'),
    tamaños: [
      { nombre: 'Chico', precio: '$49' },
      { nombre: 'Mediano', precio: '$79' },
      { nombre: 'Grande', precio: '$99' },
    ],
    ingredientes: ['maíz', 'mantequilla', 'sal'],
  },
  {
    id: 2,
    nombre: 'Palomitas de Cajeta Crunch',
    descripcion: 'Palomitas dulces con el toque crujiente y dulce de cajeta, un clásico mexicano.',
    imagenUrl: '/images/palomitas/caremelo.svg',
    precio: '$99',
    categorias: ['dulce', 'cajeta', 'crujiente'],
    slug: generarSlug('Palomitas de Cajeta Crunch'),
    tamaños: [
      { nombre: 'Chico', precio: '$59' },
      { nombre: 'Mediano', precio: '$89' },
      { nombre: 'Grande', precio: '$109' },
    ],
    ingredientes: ['maíz', 'cajeta', 'azúcar', 'mantequilla'],
  },
  {
    id: 3,
    nombre: 'Palomitas con Chile y Limón',
    descripcion: 'Un toque picante con chile y el frescor del limón, para los amantes del sabor intenso.',
    imagenUrl: '/images/palomitas/chile.svg',
    precio: '$95',
    categorias: ['salado', 'picante', 'chile', 'limón'],
    slug: generarSlug('Palomitas con Chile y Limón'),
    tamaños: [
      { nombre: 'Chico', precio: '$55' },
      { nombre: 'Mediano', precio: '$85' },
      { nombre: 'Grande', precio: '$105' },
    ],
    ingredientes: ['maíz', 'chile en polvo', 'limón', 'sal'],
  },
  {
    id: 4,
    nombre: 'Palomitas con Canela y Piloncillo',
    descripcion: 'Dulces y aromáticas, con canela y el toque tradicional de piloncillo.',
    imagenUrl: '/images/palomitas/caremelo.svg',
    precio: '$99',
    categorias: ['dulce', 'canela', 'piloncillo'],
    slug: generarSlug('Palomitas con Canela y Piloncillo'),
    tamaños: [
      { nombre: 'Chico', precio: '$59' },
      { nombre: 'Mediano', precio: '$89' },
      { nombre: 'Grande', precio: '$109' },
    ],
    ingredientes: ['maíz', 'piloncillo', 'canela', 'mantequilla'],
  },
  {
    id: 11,
    nombre: 'Smootie',
    descripcion: 'Una bebida refrescante de frutas naturales.',
    imagenUrl: '/bebidas/smootie.png',
    precio: '$50',
    categorias: ['bebida'],
    slug: generarSlug('smootie'),
    tamaños: [
      { nombre: 'Chico', precio: '$40' },
      { nombre: 'Grande', precio: '$60' },
    ],
    ingredientes: ['fresa', 'plátano', 'yogur', 'hielo'],
  },
  {
    id: 12,
    nombre: 'Botana Mixta',
    descripcion: 'Una botana deliciosa con mezcla de nueces, cacahuates y arándanos.',
    imagenUrl: '/images/placeholder-botana.jpg',
    precio: '$60',
    categorias: ['botana'],
    slug: generarSlug('Botana Mixta'),
    tamaños: [
      { nombre: 'Individual', precio: '$60' },
      { nombre: 'Familiar', precio: '$110' },
    ],
    ingredientes: ['cacahuates', 'nueces', 'arándanos', 'sal marina'],
  },
];
