import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { Movie } from '../models/movie';

import { MovieService } from './movie.service';

describe('MovieService', () => {
    beforeEach(
        async() => await TestBed.configureTestingModule({
            providers: [MovieService, HttpClient],
            imports: [HttpClientModule]
        })
    );
    describe("boundary", () => {

        it('should be created', inject([MovieService], (movieService: MovieService) => {
            expect(movieService).toBeTruthy();
        }));

        it('should fetch all movies', inject([MovieService], (movieService: MovieService) => {

            movieService.getAllMovies().subscribe((res: Movie[]) => {
                expect(res).toBeDefined();
            }, (e) => {
                expect(e).toBeUndefined();
            });

        }));


    });

});
