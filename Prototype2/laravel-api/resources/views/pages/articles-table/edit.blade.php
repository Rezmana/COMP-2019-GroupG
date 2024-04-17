<x-layout bodyClass="g-sidenav-show bg-gray-200">

    <x-navbars.sidebar activePage="articles-table"></x-navbars.sidebar>
    <div class="main-content position-relative bg-gray-100 max-height-vh-100 h-100">
        <!-- Navbar -->
        <x-navbars.navs.auth titlePage='Articles'></x-navbars.navs.auth>
        <!-- End Navbar -->
    
    
    <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12">
                    <div class="card my-4">
                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 class="text-white mx-3">
                                    <strong>Edit Row</strong>
                                </h6>
                            </div>
                        </div>
                        <form method='POST' action='{{ url('articles-table/'.$article->ArticleID.'/edit') }}'>
                            @csrf
                            @method('PUT')
                            <div class="py-1 px-3">    
                                <div class="mb-3 col-md-12">
                                    <label class="form-label">Title</label>
                                    <input type="text" name="Title" class="form-control border border-2 p-2" value='{{ $article->Title }}'>
                                    @error('Title') <p class='text-danger inputerror'>{{ $message }} </p> @enderror
                                </div>

                                <div class="mb-3 col-md-12">
                                    <label class="form-label">Description</label>
                                    <input type="text" name="Description" class="form-control border border-2 p-2" value='{{ $article->Description }}'>
                                    @error('Description') <p class='text-danger inputerror'>{{ $message }} </p> @enderror
                                </div>
                                
                                <div class="mb-3 col-md-12">
                                    <label class="form-label">URL</label>
                                    <input type="Text" name="URL" class="form-control border border-2 p-2" value='{{ $article->URL }}'>
                                    @error('URL') <p class='text-danger inputerror'>{{ $message }} </p> @enderror
                                </div>
                        
                                <button type="submit" class="btn bg-gradient-dark">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <x-footers.auth></x-footers.auth>
        </div>
</div>
</x-layout>
