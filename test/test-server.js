/* global describe,it,require */

describe('murmurHash3js', function() {
	'use strict';

	it('x86', function(done) {
		var murmurHash3 = require('../');

		murmurHash3.x86.hash32("I will not buy this record, it is scratched.")
			.should.be.equal(2832214938);
		murmurHash3.x86.hash128("I will not buy this tobacconist's, it is scratched.")
			.should.be.equal("ef3f78669b5b7ba200f3f98e889adeaf");
		murmurHash3.x86.hash32("My hovercraft is full of eels.", 0)
			.should.be.equal(2953494853);
		murmurHash3.x86.hash32("My hovercraft is full of eels.", 25)
			.should.be.equal(2520298415);
		murmurHash3.x86.hash32("My hovercraft is full of eels.", 128)
			.should.be.equal(2204470254);

		murmurHash3.x86.hash32("I will not buy this record, it is scratched.").should.be.equal(2832214938);
		murmurHash3.x86.hash32("").should.be.equal(0);
		murmurHash3.x86.hash32("0").should.be.equal(3530670207);
		murmurHash3.x86.hash32("01").should.be.equal(1642882560);
		murmurHash3.x86.hash32("012").should.be.equal(3966566284);
		murmurHash3.x86.hash32("0123").should.be.equal(3558446240);
		murmurHash3.x86.hash32("01234").should.be.equal(433070448);
		murmurHash3.x86.hash32("", 1).should.be.equal(1364076727);

		murmurHash3.x86.hash128("").should.be.equal("00000000000000000000000000000000");
		murmurHash3.x86.hash128("0").should.be.equal("a5eb34f80ab2409ea5eb34f8a5eb34f8");
		murmurHash3.x86.hash128("01").should.be.equal("674f3b210f87acb4674f3b21674f3b21");
		murmurHash3.x86.hash128("012").should.be.equal("4c13d78ecd94fea54c13d78e4c13d78e");
		murmurHash3.x86.hash128("0123").should.be.equal("485d3536dc378fea485d3536485d3536");
		murmurHash3.x86.hash128("01234").should.be.equal("7b3b211635c5b3ee00ae108800ae1088");
		murmurHash3.x86.hash128("012345").should.be.equal("6ce1944bdb26dc75f825536af825536a");
		murmurHash3.x86.hash128("0123456").should.be.equal("86d15c02b708d0a1495d053b495d053b");
		murmurHash3.x86.hash128("01234567").should.be.equal("92160402aa22bf8463b83c5e63b83c5e");
		murmurHash3.x86.hash128("012345678").should.be.equal("75d48126571b5f674ca675dcd0205c30");
		murmurHash3.x86.hash128("0123456789").should.be.equal("2e528b330017a61e57a11235a5443f20");
		murmurHash3.x86.hash128("0123456789a").should.be.equal("921f15e438a2ed0fa971884f2caa7f97");
		murmurHash3.x86.hash128("0123456789ab").should.be.equal("b6982a7ecfaa93f904d3d08f53412b5d");
		murmurHash3.x86.hash128("0123456789abc").should.be.equal("cc6d9d01c970af1dfc11eee3dd00c683");
		murmurHash3.x86.hash128("0123456789abcd").should.be.equal("c0a5114d6f34d20a63f51794ae0d83c5");
		murmurHash3.x86.hash128("0123456789abcde").should.be.equal("4d0818c03c76c46da78673faadd433da");
		murmurHash3.x86.hash128("0123456789abcdef").should.be.equal("36aed30afb7d4409572b3bfd48ad1d9b");
		murmurHash3.x86.hash128("", 1).should.be.equal("54d201b988c4adec54d201b954d201b9");

		done();
	});

	it('x64', function(done) {
		var murmurHash3 = require('../');

		murmurHash3.x64.hash128("I will not buy this record, it is scratched.")
			.should.be.equal("c382657f9a06c49d4a71fdc6d9b0d48f");
		murmurHash3.x64.hash128("I will not buy this tobacconist's, it is scratched.")
			.should.be.equal("d30654abbd8227e367d73523f0079673");
		murmurHash3.x64.hash128("My hovercraft is full of eels.", 0)
			.should.be.equal("03e5e14d358c16d1e5ae86df7ed5cfcb");
		murmurHash3.x64.hash128("My hovercraft is full of eels.", 25)
			.should.be.equal("e85cec5bbbe05ddefccbf1b933fff845");
		murmurHash3.x64.hash128("My hovercraft is full of eels.", 128)
			.should.be.equal("898223700c20009cf8b163b4519c7a35");

		murmurHash3.x64.hash128("I will not buy this tobacconist's, it is scratched.").should.be.equal("d30654abbd8227e367d73523f0079673");
		murmurHash3.x64.hash128("").should.be.equal("00000000000000000000000000000000");
		murmurHash3.x64.hash128("0").should.be.equal("2ac9debed546a3803a8de9e53c875e09");
		murmurHash3.x64.hash128("01").should.be.equal("649e4eaa7fc1708ee6945110230f2ad6");
		murmurHash3.x64.hash128("012").should.be.equal("ce68f60d7c353bdb00364cd5936bf18a");
		murmurHash3.x64.hash128("0123").should.be.equal("0f95757ce7f38254b4c67c9e6f12ab4b");
		murmurHash3.x64.hash128("01234").should.be.equal("0f04e459497f3fc1eccc6223a28dd613");
		murmurHash3.x64.hash128("012345").should.be.equal("88c0a92586be0a2781062d6137728244");
		murmurHash3.x64.hash128("0123456").should.be.equal("13eb9fb82606f7a6b4ebef492fdef34e");
		murmurHash3.x64.hash128("01234567").should.be.equal("8236039b7387354dc3369387d8964920");
		murmurHash3.x64.hash128("012345678").should.be.equal("4c1e87519fe738ba72a17af899d597f1");
		murmurHash3.x64.hash128("0123456789").should.be.equal("3f9652ac3effeb248027a17cf2990b07");
		murmurHash3.x64.hash128("0123456789a").should.be.equal("4bc3eacd29d386297cb2d9e797da9c92");
		murmurHash3.x64.hash128("0123456789ab").should.be.equal("66352b8cee9e3ca7a9edf0b381a8fc58");
		murmurHash3.x64.hash128("0123456789abc").should.be.equal("5eb2f8db4265931e801ce853e61d0ab7");
		murmurHash3.x64.hash128("0123456789abcd").should.be.equal("07a4a014dd59f71aaaf437854cd22231");
		murmurHash3.x64.hash128("0123456789abcde").should.be.equal("a62dd5f6c0bf23514fccf50c7c544cf0");
		murmurHash3.x64.hash128("0123456789abcdef").should.be.equal("4be06d94cf4ad1a787c35b5c63a708da");
		murmurHash3.x64.hash128("", 1).should.be.equal("4610abe56eff5cb551622daa78f83583");

		done();
	});
});