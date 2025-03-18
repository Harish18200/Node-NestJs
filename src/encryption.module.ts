import { Module } from '@nestjs/common';
import { EncryptionService } from './encryption.service';


@Module({
    providers: [EncryptionService], // Register it here
    exports: [EncryptionService], // Make it available to other modules
})
export class EncryptionModule {}
