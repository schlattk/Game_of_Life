describe('set_up', function(){
  set_up  = new Set_up();
  it('has a game grid', function(){
      expect(set_up.grid).toBeDefined();
  });
//   it ('has a transformed number',function(){
//       expect(iban_checker.transformed_iban).toBeDefined();
//   });
//   it ('has a valid/invalid variable',function(){
//       expect(iban_checker.valid).toBeDefined();
//   });
// });
//
// describe('transforms the IBAN', function(){
//   iban_checker = new Iban_checker();
//   iban_checker.transform('DE19760300800930875295');
//   it('converts the mixed string into a transformed string ', function(){
//       expect(iban_checker.transformed_iban).toBe('760300800930875295131419');
//   });
// });
//
// describe('transform the IBAN', function(){
//   iban_checker1 = new Iban_checker();
//   iban_checker1.transform('GB82WEST12345698765432');
//   it('converts the mixed string into a transformed string ', function(){
//       expect(iban_checker1.transformed_iban).toBe('3214282912345698765432161182');
//     });
//   });
//
//   describe('calculate remainder', function(){
//     iban_checker2 = new Iban_checker()
//     iban_checker2.check('GB82WEST12345698765432');
//     it('returns true if the remainder is 1', function(){
//       expect(iban_checker2.valid).toEqual(true);
//     })
//   })
//   describe('calculate remainder', function(){
//     iban_checker3 = new Iban_checker()
//     iban_checker3.check('DE59760300800930875295');
//     it('returns false if the remainder is not equal to 1', function(){
//       expect(iban_checker3.valid).toEqual(false);
//     })
//   })

});
