export default function ServiceMethodNotFoundError(service, method) {
  this.name = this.constructor.name;

  this.meta = {service, method};
  this.message = 'Service method not found or empty!';
  this.code = 2;
}
