export default function ServiceNotFoundError(service) {
  this.name = this.constructor.name;

  this.meta = {service};
  this.message = 'Service not found or empty!';
  this.code = 1;
}
