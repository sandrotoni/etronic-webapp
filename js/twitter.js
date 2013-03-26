  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>phonegap-plugins/Android/Twitter/www/twitter.js at master · phonegap/phonegap-plugins</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="BFCJM/0+BseOuBNDSZnW3YGEcedrZzk7uYiSB6RN03A=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-8c237cc402e3d4bc024750691ccce4fd5eddee2e.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-ee88d6efbef561aca0105f30ff4dab9ce7762806.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-d76b58e749b52bc47a4c46620bf2c320fabe5248.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-bb7f1cf3919b755750f50fd96ab249e1fb4d1e84.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="51085d2927ed2208d803c8788023d35f">

        <link data-pjax-transient rel='permalink' href='/phonegap/phonegap-plugins/blob/00f62755d12a6122403e1711ff0dd20e0b85e34c/Android/Twitter/www/twitter.js'>
    <meta property="og:title" content="phonegap-plugins"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/phonegap/phonegap-plugins"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/467b6e8a473f45a15ac9514a30c15c3d?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Plugins for use with PhoneGap. . Contribute to phonegap-plugins development by creating an account on GitHub."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="phonegap/phonegap-plugins"/>

    <meta name="description" content="Plugins for use with PhoneGap. . Contribute to phonegap-plugins development by creating an account on GitHub." />

  <link href="https://github.com/phonegap/phonegap-plugins/commits/master.atom" rel="alternate" title="Recent Commits to phonegap-plugins:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public fork env-production  ">
    <div id="wrapper">

      

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


              <div class="command-bar js-command-bar  ">
      <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" data-username="sandrotoni" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>
  <ul class="top-nav">
      <li class="explore"><a href="https://github.com/explore">Explore</a></li>
      <li><a href="https://gist.github.com">Gist</a></li>
      <li><a href="/blog">Blog</a></li>
    <li><a href="http://help.github.com">Help</a></li>
  </ul>
</div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/sandrotoni" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/6c3c1238a2050f9c9c5404abde8cbbe6?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> sandrotoni
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
        <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
          <span class="mini-icon mini-icon-logout"></span>
        </a>
      </li>
    </ul>



            
          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="BFCJM/0+BseOuBNDSZnW3YGEcedrZzk7uYiSB6RN03A=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="968030" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="mini-icon mini-icon-watching"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item js-navigation-target selected">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-watching"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item js-navigation-target ">
              <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="mini-icon mini-icon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/phonegap/phonegap-plugins/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-remove-star"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/phonegap/phonegap-plugins/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/phonegap/phonegap-plugins/stargazers">2,872</a>
    </li>

        <li>
          <a href="/phonegap/phonegap-plugins/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="mini-icon mini-icon-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/phonegap/phonegap-plugins/network" class="social-count">2,188</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-repo-forked"></span>
                <span class="author vcard">
                  <a href="/phonegap" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">phonegap</span>
                  </a></span> /
                <strong><a href="/phonegap/phonegap-plugins" class="js-current-repository">phonegap-plugins</a></strong>
                  <span class="fork-flag">
                    <span class="text">forked from <a href="/purplecabbage/phonegap-plugins">purplecabbage/phonegap-plugins</a></span>
                  </span>
              </h1>
            </div>

            
  <ul class="tabs">
    <li><a href="/phonegap/phonegap-plugins" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/phonegap/phonegap-plugins/network" highlight="repo_network">Network</a></li>
    <li><a href="/phonegap/phonegap-plugins/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>77</span></a></li>

      <li><a href="/phonegap/phonegap-plugins/issues" highlight="repo_issues">Issues <span class='counter'>340</span></a></li>

      <li><a href="/phonegap/phonegap-plugins/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/phonegap/phonegap-plugins/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/phonegap/phonegap-plugins/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">4</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/phonegap/phonegap-plugins/blob/master/Android/Twitter/www/twitter.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/phonegap/phonegap-plugins/blob/init/Android/Twitter/www/twitter.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="init" rel="nofollow" title="init">init</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/phonegap/phonegap-plugins/blob/PG141/Android/Twitter/www/twitter.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="PG141" rel="nofollow" title="PG141">PG141</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/phonegap/phonegap-plugins/blob/BasicCLforIOS/Android/Twitter/www/twitter.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="BasicCLforIOS" rel="nofollow" title="BasicCLforIOS">BasicCLforIOS</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/phonegap/phonegap-plugins/blob/AdPlugin-20100712/Android/Twitter/www/twitter.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="AdPlugin-20100712" rel="nofollow" title="AdPlugin-20100712">AdPlugin-20100712</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/phonegap/phonegap-plugins" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/phonegap/phonegap-plugins/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/phonegap/phonegap-plugins/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ea9e32c0ef689a47883f40855dd361d9 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:ea9e32c0ef689a47883f40855dd361d9 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-plugins" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">phonegap-plugins</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-plugins/tree/master/Android" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">Android</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-plugins/tree/master/Android/Twitter" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">Twitter</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/phonegap/phonegap-plugins/tree/master/Android/Twitter/www" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">www</span></a></span><span class="separator"> / </span><strong class="final-path">twitter.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="Android/Twitter/www/twitter.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/phonegap/phonegap-plugins/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/5c387af8f975f4c577d7a01497a9a925?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/KinG-InFeT" rel="author">KinG-InFeT</a></span>
    <time class="js-relative-date" datetime="2013-03-19T08:09:27-07:00" title="2013-03-19 08:09:27">March 19, 2013</time>
    <div class="commit-title">
        <a href="/phonegap/phonegap-plugins/commit/4e77cef5ccca380cc64759a42b338c7776d28df8" class="message">Update twitter.js</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="KinG-InFeT" href="/phonegap/phonegap-plugins/commits/master/Android/Twitter/www/twitter.js?author=KinG-InFeT"><img height="20" src="https://secure.gravatar.com/avatar/5c387af8f975f4c577d7a01497a9a925?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="ObjetDirect" href="/phonegap/phonegap-plugins/commits/master/Android/Twitter/www/twitter.js?author=ObjetDirect"><img height="20" src="https://secure.gravatar.com/avatar/845a8796c2e852ccf15b8bc808289d47?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/5c387af8f975f4c577d7a01497a9a925?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/KinG-InFeT">KinG-InFeT</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/845a8796c2e852ccf15b8bc808289d47?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/ObjetDirect">ObjetDirect</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/phonegap/phonegap-plugins/blob/00f62755d12a6122403e1711ff0dd20e0b85e34c/Android/Twitter/www/twitter.js" data-title="phonegap-plugins/Android/Twitter/www/twitter.js at master · phonegap/phonegap-plugins · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>46 lines (38 sloc)</span>
                <span>1.389 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/phonegap/phonegap-plugins/edit/master/Android/Twitter/www/twitter.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/phonegap/phonegap-plugins/raw/master/Android/Twitter/www/twitter.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/phonegap/phonegap-plugins/blame/master/Android/Twitter/www/twitter.js" class="button minibutton ">Blame</a>
                  <a href="/phonegap/phonegap-plugins/commits/master/Android/Twitter/www/twitter.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm">	Twitter Plugin</span></div><div class='line' id='LC3'><span class="cm">*/</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="nx">cordova</span><span class="p">.</span><span class="nx">define</span><span class="p">(</span><span class="s2">&quot;cordova/plugin/twitter&quot;</span><span class="p">,</span></div><div class='line' id='LC6'>&nbsp;&nbsp;<span class="kd">function</span><span class="p">(</span><span class="nx">require</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">module</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">exec</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;cordova/exec&quot;</span><span class="p">);</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Twitter</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{};</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Twitter</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">isTwitterAvailable</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">success</span><span class="p">,</span> <span class="nx">failure</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">failure</span> <span class="o">!=</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;Twitter.scan failure: failure parameter not a function&quot;</span><span class="p">);</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">success</span> <span class="o">!=</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;Twitter.scan failure: success callback parameter must be a function&quot;</span><span class="p">);</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">success</span><span class="p">,</span> <span class="nx">failure</span><span class="p">,</span> <span class="s2">&quot;Twitter&quot;</span><span class="p">,</span> <span class="s2">&quot;isTwitterAvailable&quot;</span><span class="p">,</span> <span class="p">[]);</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Twitter</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">composeTweet</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">success</span><span class="p">,</span> <span class="nx">failure</span><span class="p">,</span> <span class="nx">tweetText</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">failure</span> <span class="o">!=</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;Twitter.scan failure: failure parameter not a function&quot;</span><span class="p">);</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">success</span> <span class="o">!=</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;Twitter.scan failure: success callback parameter must be a function&quot;</span><span class="p">);</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cordova</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">success</span><span class="p">,</span> <span class="nx">failure</span><span class="p">,</span> <span class="s2">&quot;Twitter&quot;</span><span class="p">,</span> <span class="s2">&quot;composeTweet&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">tweetText</span><span class="p">]);</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">twitter</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Twitter</span><span class="p">();</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">twitter</span><span class="p">;</span></div><div class='line' id='LC38'><span class="p">});</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC42'><span class="p">}</span></div><div class='line' id='LC43'><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">.</span><span class="nx">twitter</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">plugins</span><span class="p">.</span><span class="nx">twitter</span> <span class="o">=</span> <span class="nx">cordova</span><span class="p">.</span><span class="nx">require</span><span class="p">(</span><span class="s2">&quot;cordova/plugin/twitter&quot;</span><span class="p">);</span></div><div class='line' id='LC45'><span class="p">}</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.07999s from fe2.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/phonegap/phonegap-plugins/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.08045' data-host='fe2'></span>
    
  </body>
</html>

