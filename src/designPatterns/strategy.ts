interface CompressionStrategy {
	compress(imageData: any): void;
}

class JpegCompressionStrategy implements CompressionStrategy {
	compress(imageData: any): void {
		{
			console.log("Compressing image using JPEG compression");
		}
	}
}

class PngCompressionStrategy implements CompressionStrategy {
	compress(imageData: any): void {
		console.log("Compressing image using PNG compression");
	}
}

class GifCompressionStrategy implements CompressionStrategy {
	compress(imageData: any): void {
		console.log("Compressing image using GIF compression");
	}
}

class ImageProcessor {
	private compressionStrategy: CompressionStrategy | undefined;

	constructor(imageType: string) {
		if (imageType == 'png') {
			this.compressionStrategy = new PngCompressionStrategy();
		} else if (imageType == 'jpg') {
			this.compressionStrategy = new JpegCompressionStrategy();
		} else if (imageType == 'gif') {
			this.compressionStrategy = new GifCompressionStrategy();
		} else {
			throw new Error("Invalid image type");
		}
	}

	compressImage(imageData: any): any {
		return this.compressionStrategy!.compress(imageData);
	}
}

const imageProcessor = new ImageProcessor('image.png');
const compressedImage = imageProcessor.compressImage({});
console.log(compressedImage);