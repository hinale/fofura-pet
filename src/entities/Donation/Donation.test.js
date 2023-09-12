const Donation = require('./Donation');
const Institution = require('../Institution/Institution');

describe('class Donation', () => {
  let donation;
  let institution;

  beforeEach(() => {
    donation = new Donation();
    institution = new Institution("DoaPet", "doapet@mail.com", "41912341234", "Rua Av. 15 de Setembro, 444 - Centro", "Curitiba", "PR");
  });

  it('should set and get institution', () => {
    donation.setInstitution(institution);
    expect(donation.institution).toBe(institution);
  });

  it('should set and get PIX key', () => {
    donation.setPixKey('chave-pix-da-instituicao');
    expect(donation.pixKey).toBe('chave-pix-da-instituicao');
  });

  it('should throw error if trying to make donation without institution', () => {
    expect(() => donation.makeDonation(100)).toThrow('No institution set for donation');
  });

  it('should throw error if trying to make donation without PIX key', () => {
    donation.setInstitution(institution);
    expect(() => donation.makeDonation(100)).toThrow('PIX key is not set');
  });

  it('should make a donation with institution and PIX key', () => {
    donation.setInstitution(institution);
    donation.setPixKey('chave-pix-da-instituicao');
    
    donation.makeDonation(100);
    
    const result = {
      institution: donation.institution.name,
      pixKey: donation.pixKey,
      amount: 100,
    }
    
    expect(Donation.donations.allValue).toEqual(100);
    expect(Donation.donations.info.length).toBe(1);
    expect(Donation.donations.info[0]).toEqual(result);
  });
});
