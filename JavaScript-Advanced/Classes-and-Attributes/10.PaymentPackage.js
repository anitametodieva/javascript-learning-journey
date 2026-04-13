const { expect } = require('chai');
const PaymentPackage = require('../PaymentPackage'); 


describe('PaymentPackage', function () {
    describe('constructor', function () {
        it('should create instance with correct initial values', function () {
            const p = new PaymentPackage('HR Services', 1500);

            expect(p.name).to.equal('HR Services');
            expect(p.value).to.equal(1500);
            expect(p.VAT).to.equal(20);
            expect(p.active).to.equal(true);
        });

        it('should throw if name is not a string', function () {
            expect(() => new PaymentPackage(5, 100)).to.throw(Error, 'Name must be a non-empty string');
        });

        it('should throw if name is empty string', function () {
            expect(() => new PaymentPackage('', 100)).to.throw(Error, 'Name must be a non-empty string');
        });

        it('should throw if value is not a number', function () {
            expect(() => new PaymentPackage('A', '100')).to.throw(Error, 'Value must be a non-negative number');
        });

        it('should throw if value is negative', function () {
            expect(() => new PaymentPackage('A', -1)).to.throw(Error, 'Value must be a non-negative number');
        });
    });

    describe('name getter/setter', function () {
        it('should set name correctly', function () {
            const p = new PaymentPackage('A', 1);
            p.name = 'B';
            expect(p.name).to.equal('B');
        });

        it('should throw if name is not a string', function () {
            const p = new PaymentPackage('A', 1);
            expect(() => (p.name = 1)).to.throw(Error, 'Name must be a non-empty string');
        });

        it('should throw if name is empty string', function () {
            const p = new PaymentPackage('A', 1);
            expect(() => (p.name = '')).to.throw(Error, 'Name must be a non-empty string');
        });
    });

    describe('value getter/setter', function () {
        it('should set value correctly', function () {
            const p = new PaymentPackage('A', 1);
            p.value = 10;
            expect(p.value).to.equal(10);
        });

        it('should allow value 0', function () {
            const p = new PaymentPackage('A', 1);
            p.value = 0;
            expect(p.value).to.equal(0);
        });

        it('should throw if value is not a number', function () {
            const p = new PaymentPackage('A', 1);
            expect(() => (p.value = '10')).to.throw(Error, 'Value must be a non-negative number');
        });

        it('should throw if value is negative', function () {
            const p = new PaymentPackage('A', 1);
            expect(() => (p.value = -10)).to.throw(Error, 'Value must be a non-negative number');
        });
    });

    describe('VAT getter/setter', function () {
        it('should set VAT correctly', function () {
            const p = new PaymentPackage('A', 1);
            p.VAT = 10;
            expect(p.VAT).to.equal(10);
        });

        it('should allow VAT 0', function () {
            const p = new PaymentPackage('A', 1);
            p.VAT = 0;
            expect(p.VAT).to.equal(0);
        });

        it('should throw if VAT is not a number', function () {
            const p = new PaymentPackage('A', 1);
            expect(() => (p.VAT = '20')).to.throw(Error, 'VAT must be a non-negative number');
        });

        it('should throw if VAT is negative', function () {
            const p = new PaymentPackage('A', 1);
            expect(() => (p.VAT = -1)).to.throw(Error, 'VAT must be a non-negative number');
        });
    });

    describe('active getter/setter', function () {
        it('should set active correctly', function () {
            const p = new PaymentPackage('A', 1);
            p.active = false;
            expect(p.active).to.equal(false);
        });

        it('should throw if active is not boolean', function () {
            const p = new PaymentPackage('A', 1);
            expect(() => (p.active = null)).to.throw(Error, 'Active status must be a boolean');
        });
    });

    describe('toString', function () {
        it('should return correct string when active is true (default)', function () {
            const p = new PaymentPackage('HR Services', 1500);
            const result = p.toString();

            expect(result).to.equal(
                'Package: HR Services\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800'
            );
        });

        it('should include (inactive) when active is false', function () {
            const p = new PaymentPackage('HR Services', 1500);
            p.active = false;
            const result = p.toString();

            expect(result).to.equal(
                'Package: HR Services (inactive)\n' +
                '- Value (excl. VAT): 1500\n' +
                '- Value (VAT 20%): 1800'
            );
        });

        it('should calculate VAT value correctly when VAT is changed', function () {
            const p = new PaymentPackage('A', 100);
            p.VAT = 10;

            expect(p.toString()).to.equal(
                'Package: A\n' +
                '- Value (excl. VAT): 100\n' +
                '- Value (VAT 10%): 110'
            );
        });
    });
});